// Chat widget functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get DOM elements
  const chatInput = document.getElementById('chat-input');
  const chatSubmit = document.getElementById('chat-submit');
  const chatStop = document.getElementById('chat-stop');
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.getElementById('chat-bubble');
  const chatPopup = document.getElementById('chat-popup');
  const chatOverlay = document.getElementById('chat-overlay');
  const closePopup = document.getElementById('close-popup');

  // Check if all required elements exist before initializing
  if (!chatInput || !chatSubmit || !chatStop || !chatMessages || !chatBubble || !chatPopup || !chatOverlay || !closePopup) {
    console.error('Chat widget: Some required elements are missing. Widget initialization aborted.');
    return;
  }

  // Ensure the popup and overlay are hidden by default
  chatPopup.classList.add('hidden');
  chatOverlay.classList.add('hidden');

  // Initialize messages array to store conversation history
  let messagesHistory = [];

  // Controller for aborting fetch requests
  let activeController = null;

  // Configure marked.js options with security in mind
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(code, { language: validLanguage }).value;
    },
    pedantic: false,
    gfm: true,
    breaks: true,
    smartypants: false,
    xhtml: false
  });

  // Add event listeners
  chatSubmit.addEventListener('click', function () {
    const message = chatInput.value.trim();
    if (!message) return;

    // Toggle buttons
    chatSubmit.classList.add('hidden');
    chatStop.classList.remove('hidden');

    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
    onUserRequest(message);
  });

  chatStop.addEventListener('click', function () {
    // Abort the current request if active
    if (activeController) {
      activeController.abort();
      activeController = null;
    }

    // Toggle buttons back
    chatStop.classList.add('hidden');
    chatSubmit.classList.remove('hidden');
  });

  chatInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    togglePopup();
  });

  closePopup.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    hidePopup();
  });

  // Close popup when clicking on the overlay
  chatOverlay.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    hidePopup();
  });

  // Toggle chat popup visibility
  function togglePopup() {
    if (chatPopup.classList.contains('hidden')) {
      showPopup();
    } else {
      hidePopup();
    }
  }

  // Show popup
  function showPopup() {
    chatPopup.classList.remove('hidden');
    chatOverlay.classList.remove('hidden');
    chatInput.focus();
  }

  // Hide popup
  function hidePopup() {
    chatPopup.classList.add('hidden');
    chatOverlay.classList.add('hidden');
  }

  // Handle user message and API call
  function onUserRequest(message) {
    // Display user message
    const messageElement = document.createElement('div');
    messageElement.className = 'user-message';

    // Sanitize user input before inserting into DOM
    const sanitizedMessage = DOMPurify.sanitize(message);
    messageElement.innerHTML = `
      <div class="message-bubble user-bubble">
        ${sanitizedMessage}
      </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add user message to history
    messagesHistory.push({
      role: "user",
      content: message
    });

    // Create and show typing indicator immediately
    const replyElement = document.createElement('div');
    replyElement.className = 'assistant-message';
    replyElement.id = 'current-response'; // Add ID for easy reference
    replyElement.innerHTML = `
      <div class="message-bubble assistant-bubble">
        <div class="raw-content" style="white-space: pre-wrap;"></div>
      </div>
      <div class="typing-indicator">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `;

    // Append typing indicator immediately
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Handle streaming response
    handleStreamingResponse(messagesHistory, replyElement);
  }

  function handleStreamingResponse(messages, replyElement) {
    // Create a new AbortController for this request
    activeController = new AbortController();

    // Get references to elements
    const messageContainer = replyElement.querySelector('.assistant-bubble');
    const rawContentContainer = replyElement.querySelector('.raw-content');
    const typingIndicator = replyElement.querySelector('.typing-indicator');

    // Set up headers for SSE
    const headers = new Headers({
      'Accept': 'text/event-stream',
      'Content-Type': 'application/json'
    });

    const signal = activeController.signal;

    fetch('https://tyk-docs-ask-ai.dokku.tyk.technology/api/stream', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ messages: messages }),
      signal: signal
    }).then(response => {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let accumulatedText = '';

      function processStream() {
        reader.read().then(({ done, value }) => {
          if (done) {
            if (typingIndicator) typingIndicator.remove();
            renderMarkdown(accumulatedText, rawContentContainer);
            return;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.trim() === '') continue;

            const dataMatch = line.match(/^data: (.+)$/m);
            if (!dataMatch) continue;
            const data = dataMatch[1];

            if (data === '[DONE]') {
              if (typingIndicator) typingIndicator.remove();
              renderMarkdown(accumulatedText, rawContentContainer);
              return;
            }

            try {
              const parsedData = JSON.parse(data);
              if (parsedData.text) {

                if (parsedData.text === "[ERROR]") {
                  accumulatedText += "\n\n**Unexpected failure, please try again**"
                  rawContentContainer.textContent = "\n\n**Unexpected failure, please try again**"
                  chatMessages.scrollTop = chatMessages.scrollHeight;
                } else {
                  accumulatedText += parsedData.text;
                  rawContentContainer.textContent = accumulatedText;
                  chatMessages.scrollTop = chatMessages.scrollHeight;
                }
              }
            } catch (error) {
              console.error('Error parsing SSE data:', error);
            }
          }

          processStream();
        }).catch(error => {
          console.error('Error reading from stream:', error);
          if (typingIndicator) typingIndicator.remove();
          if (!accumulatedText) {
            rawContentContainer.textContent = 'Sorry, something went wrong with the streaming connection.';
          }
        });
      }

      processStream();
    }).catch(error => {
      console.error('Error fetching stream:', error);
      if (typingIndicator) typingIndicator.remove();

      // Check if this was an abort error
      if (error.name === 'AbortError') {
        rawContentContainer.textContent = 'Request was cancelled.';
      } else {
        rawContentContainer.textContent = 'Sorry, something went wrong with the streaming connection.';
      }

      // Reset UI
      chatStop.classList.add('hidden');
      chatSubmit.classList.remove('hidden');
    });
  }

  // Helper to render Markdown at the end
  function renderMarkdown(accumulatedText, container) {
    // Reset UI
    chatStop.classList.add('hidden');
    chatSubmit.classList.remove('hidden');
    activeController = null;
    try {
      const markdownContainer = document.createElement('div');
      markdownContainer.className = 'markdown-content';

      // Convert markdown to HTML
      const rawHtml = marked.parse(accumulatedText);

      // Sanitize the HTML with DOMPurify before inserting into DOM
      const sanitizedHtml = DOMPurify.sanitize(rawHtml);
      markdownContainer.innerHTML = sanitizedHtml;

      container.replaceWith(markdownContainer);

      // Add assistant response to history
      if (accumulatedText) {
        messagesHistory.push({
          role: "assistant",
          content: accumulatedText
        });
      }

      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    } catch (error) {
      console.error('Error rendering final markdown:', error);
    }
  }
});
