---
date: 2017-03-22T14:14:38Z
title: Install the Multi-Cloud Gateway
menu:
  main:
    parent: "With Tyk Multi-Cloud"
weight: 2
---

{{< note success >}}
**Note**  

Tyk Multi-Cloud has superseded our Hybrid offering. See [Tyk Multi-Cloud](https://tyk.io/api-gateway/cloud/#multi-cloud) for more details. You can get a free 1 month trial of Tyk Multi-Cloud.
{{< /note >}}

## Requirements

{{< warning success >}}
**Warning**  

Our Tyk Multi-Cloud Gateway Docker container includes Redis Server. This only works in a single node, Proof of Concept type installation. For two or more nodes, you need to have a separate Redis, shared across all Multi-Cloud instances, and set it using `start.sh` script arguments: `./start.sh PORT SECRET ORGID APIKEY (REDIS HOST) (REDIS PORT) (REDIS PW)`. See the official [Redis Docker Repository](https://hub.docker.com/_/redis/) to install Redis.
{{< /warning >}}


To install the Tyk Multi-Cloud Gateway, you need:

1.  A Docker-enabled host
2.  Access to the shell of this host
3.  Port 8080 and 9091 open
4.  A Tyk Multi-Cloud account. Click [here](/docs/getting-started/installation/with-tyk-multi-cloud/create-an-account/) for details of how to create one.

## Install the Multi-Cloud Gateway

### Step 1: Get your credentials

1.  Go to <https://admin.cloud.tyk.io> and login with your new details.
2.  Click "Users" and select your name, you will see your Organisation ID, take note of this:
    
    ![RPC credentials](/docs/img/dashboard/system-management/api_access_cred_2.5.png)

### Step 2: Installation

To get started with a Multi-Cloud node, ensure you have Docker installed, then run the following in the terminal:

For Mac OSX users:

Open a CLI that can access the `docker` command, and then:

```{.copyWrapper}
curl "https://raw.githubusercontent.com/lonelycode/tyk-hybrid-docker/master/start.sh" -o "start.sh"
chmod +x start.sh
./start.sh [PORT] [TYK-SECRET] [RPC-CREDENTIALS] [API CREDENTIALS]
```


For Linux users:

```{.copyWrapper}
wget https://raw.githubusercontent.com/lonelycode/tyk-hybrid-docker/master/start.sh
chmod +x start.sh
sudo ./start.sh [PORT] [TYK-SECRET] [RPC-CREDENTIALS] [API CREDENTIALS]
```


The parameters explained:

*   `PORT`: The port for Tyk to listen on (usually 8080).
*   `TYK-SECRET`: The secret key to use so you can interact with your Tyk node via the REST API.
*   `RPC-CREDENTIALS`: Your Organisation ID, this can be found in the Dashboard Users -> User section. See Step 1 above.
*   `API-CREDENTIALS`: Your Tyk Cloud API credentials - these can be found in the Users section of your dashboard.

The `TYK-SECRET` should be a secret key you define so you can interact with your Tyk node programatically.

This command will start the Docker container and be ready to proxy traffic (you will need to check the logs of the container to make sure the login was successful).

### Step 3: Check everything is working

To check if the node has connected and logged in, type:

```{.copyWrapper}
sudo docker logs --tail=100 --follow tyk_hybrid
```

  
This will show you the log output of the Multi-Cloud container, if you don't see any connectivity errors, and the log output ends something like this:

```
time="Jul  7 08:15:03" level=info msg="Gateway started (vx.x.x.x)"
time="Jul  7 08:15:03" level=info msg="--> Listening on port: 8080"
```
 
  
Then the gateway has successfully started.

## Upgrading the Multi-Cloud Gateway

To upgrade your Multi-Cloud Gateway, see [Upgrading Tyk](https://tyk.io/docs/upgrading-tyk/#hybrid).

 [1]: /docs/img/dashboard/system-management/api_access_cred_2.5.png
