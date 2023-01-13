### listen_por
EV: <b>TYK_DB_LISTENPOR</b><br />
Type: `int`<br />

Setting this value will change the port that Tyk Dashboard listens on. Default: 3000.

### tyk_api_config
This section contains details for a Tyk Gateway node that the Tyk Dashboard can speak to. The Dashboard controls Tyk using the Gateway API and only requires visibility to one node, so long as all nodes are using the same API Definitions.

{{< note success >}}
**Note**

If the Dashboard cannot see a Tyk node, key management functions will not work properly.
{{< /note >}}
In a sharded environment, the Gateway node specified in tyk_api_config must not be sharded.


### tyk_api_config.Host
EV: <b>TYK_DB_TYKAPI_HOST</b><br />
Type: `string`<br />

This is the full URL of your Tyk node.

### tyk_api_config.Port
EV: <b>TYK_DB_TYKAPI_PORT</b><br />
Type: `string`<br />

The port that Tyk is running on

### tyk_api_config.Secret
EV: <b>TYK_DB_TYKAPI_SECRET</b><br />
Type: `string`<br />

The secret set in your tyk.conf file. This is the key that Tyk Dashboard will use to speak to the Tyk node’s Gateway API. Note that this value **has to match** the secret value in tyk.conf.

### mongo_url
EV: <b>TYK_DB_MONGOURL</b><br />
Type: `string`<br />

The full URL to your MongoDB instance, this can be a clustered instance if necessary and should include the database and username / password data.

### mongo_use_ssl
EV: <b>TYK_DB_MONGOUSESSL</b><br />
Type: `bool`<br />

Set to true to enable Mongo SSL connection

### mongo_ssl_insecure_skip_verify
EV: <b>TYK_DB_MONGOSSLINSECURESKIPVERIFY</b><br />
Type: `bool`<br />

Allows the use of self-signed certificates when connecting to an encrypted MongoDB database.

### mongo_ssl_allow_invalid_hostnames
EV: <b>TYK_DB_MONGOSSLALLOWINVALIDHOSTNAMES</b><br />
Type: `bool`<br />

Ignore hostname check when it differs from the original (for example with SSH tunneling). The rest of the TLS verification will still be performed.

### mongo_ssl_ca_file
EV: <b>TYK_DB_MONGOSSLCAFILE</b><br />
Type: `string`<br />

Path to the PEM file with trusted root certificates

### mongo_ssl_pem_keyfile
EV: <b>TYK_DB_MONGOSSLPEMKEYFILE</b><br />
Type: `string`<br />

Path to the PEM file which contains both client certificate and private key. This is required for Mutual TLS.

### mongo_session_consistency
EV: <b>TYK_DB_MONGOSESSIONCONSISTENCY</b><br />
Type: `string`<br />

Mongo session constency: “strong”, “eventual”, or “monotonic”. default is “strong”

### mongo_batch_size
EV: <b>TYK_DB_MONGOBATCHSIZE</b><br />
Type: `int`<br />

Sets the batch size for mongo results. Defaults to 2000.
Increasing this number can decrease dashboard performance. This value cannot be lower than 100 and will fallback to 100 if a lower value has been set.

### page_size
EV: <b>TYK_DB_PAGESIZE</b><br />
Type: `int`<br />

The page size that the dashboard should use. Defaults to 10.

### storage.main.postgres.prefer_simple_protocol
EV: <b>TYK_DB_STORAGE_MAIN_POSTGRES_PREFERSIMPLEPROTOCOL</b><br />
Type: `bool`<br />

disables implicit prepared statement usage

### storage.main.mysql.default_string_size
EV: <b>TYK_DB_STORAGE_MAIN_MYSQL_DEFAULTSTRINGSIZE</b><br />
Type: `uint`<br />

default size for string fields. By default set to: 256

### storage.main.mysql.disable_datetime_precision
EV: <b>TYK_DB_STORAGE_MAIN_MYSQL_DISABLEDATETIMEPRECISION</b><br />
Type: `bool`<br />

disable datetime precision, which not supported before MySQL 5.6

### storage.main.mysql.dont_support_rename_index
EV: <b>TYK_DB_STORAGE_MAIN_MYSQL_DONTSUPPORTRENAMEINDEX</b><br />
Type: `bool`<br />

drop & create when rename index, rename index not supported before MySQL 5.7, MariaDB

### storage.main.mysql.dont_support_rename_column
EV: <b>TYK_DB_STORAGE_MAIN_MYSQL_DONTSUPPORTRENAMECOLUMN</b><br />
Type: `bool`<br />

`change` when rename column, rename column not supported before MySQL 8, MariaDB

### storage.main.mysql.skip_initialize_with_version
EV: <b>TYK_DB_STORAGE_MAIN_MYSQL_SKIPINITIALIZEWITHVERSION</b><br />
Type: `bool`<br />

auto configure based on currently MySQL version

### storage.analytics.postgres.prefer_simple_protocol
EV: <b>TYK_DB_STORAGE_ANALYTICS_POSTGRES_PREFERSIMPLEPROTOCOL</b><br />
Type: `bool`<br />

disables implicit prepared statement usage

### storage.analytics.mysql.default_string_size
EV: <b>TYK_DB_STORAGE_ANALYTICS_MYSQL_DEFAULTSTRINGSIZE</b><br />
Type: `uint`<br />

default size for string fields. By default set to: 256

### storage.analytics.mysql.disable_datetime_precision
EV: <b>TYK_DB_STORAGE_ANALYTICS_MYSQL_DISABLEDATETIMEPRECISION</b><br />
Type: `bool`<br />

disable datetime precision, which not supported before MySQL 5.6

### storage.analytics.mysql.dont_support_rename_index
EV: <b>TYK_DB_STORAGE_ANALYTICS_MYSQL_DONTSUPPORTRENAMEINDEX</b><br />
Type: `bool`<br />

drop & create when rename index, rename index not supported before MySQL 5.7, MariaDB

### storage.analytics.mysql.dont_support_rename_column
EV: <b>TYK_DB_STORAGE_ANALYTICS_MYSQL_DONTSUPPORTRENAMECOLUMN</b><br />
Type: `bool`<br />

`change` when rename column, rename column not supported before MySQL 8, MariaDB

### storage.analytics.mysql.skip_initialize_with_version
EV: <b>TYK_DB_STORAGE_ANALYTICS_MYSQL_SKIPINITIALIZEWITHVERSION</b><br />
Type: `bool`<br />

auto configure based on currently MySQL version

### storage.logs.postgres.prefer_simple_protocol
EV: <b>TYK_DB_STORAGE_LOGS_POSTGRES_PREFERSIMPLEPROTOCOL</b><br />
Type: `bool`<br />

disables implicit prepared statement usage

### storage.logs.mysql.default_string_size
EV: <b>TYK_DB_STORAGE_LOGS_MYSQL_DEFAULTSTRINGSIZE</b><br />
Type: `uint`<br />

default size for string fields. By default set to: 256

### storage.logs.mysql.disable_datetime_precision
EV: <b>TYK_DB_STORAGE_LOGS_MYSQL_DISABLEDATETIMEPRECISION</b><br />
Type: `bool`<br />

disable datetime precision, which not supported before MySQL 5.6

### storage.logs.mysql.dont_support_rename_index
EV: <b>TYK_DB_STORAGE_LOGS_MYSQL_DONTSUPPORTRENAMEINDEX</b><br />
Type: `bool`<br />

drop & create when rename index, rename index not supported before MySQL 5.7, MariaDB

### storage.logs.mysql.dont_support_rename_column
EV: <b>TYK_DB_STORAGE_LOGS_MYSQL_DONTSUPPORTRENAMECOLUMN</b><br />
Type: `bool`<br />

`change` when rename column, rename column not supported before MySQL 8, MariaDB

### storage.logs.mysql.skip_initialize_with_version
EV: <b>TYK_DB_STORAGE_LOGS_MYSQL_SKIPINITIALIZEWITHVERSION</b><br />
Type: `bool`<br />

auto configure based on currently MySQL version

### storage.uptime.postgres.prefer_simple_protocol
EV: <b>TYK_DB_STORAGE_UPTIME_POSTGRES_PREFERSIMPLEPROTOCOL</b><br />
Type: `bool`<br />

disables implicit prepared statement usage

### storage.uptime.mysql.default_string_size
EV: <b>TYK_DB_STORAGE_UPTIME_MYSQL_DEFAULTSTRINGSIZE</b><br />
Type: `uint`<br />

default size for string fields. By default set to: 256

### storage.uptime.mysql.disable_datetime_precision
EV: <b>TYK_DB_STORAGE_UPTIME_MYSQL_DISABLEDATETIMEPRECISION</b><br />
Type: `bool`<br />

disable datetime precision, which not supported before MySQL 5.6

### storage.uptime.mysql.dont_support_rename_index
EV: <b>TYK_DB_STORAGE_UPTIME_MYSQL_DONTSUPPORTRENAMEINDEX</b><br />
Type: `bool`<br />

drop & create when rename index, rename index not supported before MySQL 5.7, MariaDB

### storage.uptime.mysql.dont_support_rename_column
EV: <b>TYK_DB_STORAGE_UPTIME_MYSQL_DONTSUPPORTRENAMECOLUMN</b><br />
Type: `bool`<br />

`change` when rename column, rename column not supported before MySQL 8, MariaDB

### storage.uptime.mysql.skip_initialize_with_version
EV: <b>TYK_DB_STORAGE_UPTIME_MYSQL_SKIPINITIALIZEWITHVERSION</b><br />
Type: `bool`<br />

auto configure based on currently MySQL version

### admin_secret
EV: <b>TYK_DB_ADMINSECRET</b><br />
Type: `string`<br />

This secret is to be used by a special set of endpoints that we call “Admin APIs”. This API is part of the super-admin context and therefore has a separate endpoint prefix `/admin`. It also requires a special auth header called admin-auth. This purpose of these endpoints is to allow functionality that regular Dashboard users should not have, such as create new organisations, create super users etc. See the [Admin API](https://tyk.io/docs/dashboard-admin-api/) for more information on these endpoints.

### shared_node_secret
EV: <b>TYK_DB_NODESECRET</b><br />
Type: `string`<br />

This value should match with the node_secret Gateway configuration option value.
Each node communicates with the Dashboard via a shared secret (this setting) and a nonce to ensure that out-of-band requests cannot be made. Nodes will send a heartbeat every few seconds to notify the Dashboard that they are running.

### redis_port
EV: <b>TYK_DB_REDISPORT</b><br />
Type: `int`<br />

The port that your Redis installation listens on.

{{< note success >}}
**Note**

The Tyk Dashboard uses Redis to store its session data and to communicate with your Tyk Gateway nodes occasionally. The Redis details used by the dashboard must be the same as those set for your Tyk installation.
{{< /note >}}

### redis_host
EV: <b>TYK_DB_REDISHOST</b><br />
Type: `string`<br />

The hostname for the Redis collection and can be an IP address.

### redis_addrs
EV: <b>TYK_DB_REDISADDRS</b><br />
Type: `[]string`<br />

Used for configuring Redis clusters. See [Redis Cluster and Tyk Dashboard](https://tyk.io/docs/tyk-stack/tyk-gateway/configuration/redis-cluster/) for more info. Example:
```
   "addrs": [
     "server1:6379",
     "server2:6380",
     "server3:6381"
   ],
```

### redis_hosts
EV: <b>TYK_DB_HOSTS</b><br />
Type: `map[string]string`<br />

**DEPRECATED**. Use `redis_addrs` instead. You can also specify multiple Redis hosts here. Tyk will use this array if it is not empty, or it will use the individual legacy parameters above. You can specify multiple host:port combinations here.

### redis_username
EV: <b>TYK_DB_REDISUSERNAME</b><br />
Type: `string`<br />

If you are using Redis AUTH using its `requirepass` setting, enter your username here (recommended). If this is not used, the Dashboard will not attempt to login to Redis.

### redis_password
EV: <b>TYK_DB_REDISPASSWORD</b><br />
Type: `string`<br />

The password for your Redis Auth username.

### redis_master_name
EV: <b>TYK_DB_REDISMASTERNAME</b><br />
Type: `string`<br />

Redis Sentinel Master name

### redis_sentinel_password
EV: <b>TYK_DB_REDISSENTINELPASSWORD</b><br />
Type: `string`<br />

Redis Sentinel password

### redis_timeout
EV: <b>TYK_DB_REDISTIMEOUT</b><br />
Type: `int`<br />

Set a custom Redis network timeout. Default value is 5 seconds.

### redis_database
EV: <b>TYK_DB_REDISDATABASE</b><br />
Type: `int`<br />

Set this to the index of your Redis database if you are using more than one.

### enable_cluster
EV: <b>TYK_DB_ENABLECLUSTER</b><br />
Type: `bool`<br />

Set this to true if you are using a Redis cluster.

### redis_use_ssl
EV: <b>TYK_DB_REDISUSESSL</b><br />
Type: `bool`<br />

Use Redis SSL connection

### redis_ssl_insecure_skip_verify
EV: <b>TYK_DB_REDISSSLINSECURESKIPVERIFY</b><br />
Type: `bool`<br />

Ignore TLS verification for Redis connectin

### notify_on_change
EV: <b>TYK_DB_NOTIFYONCHANGE</b><br />
Type: `bool`<br />

Licensed users can use this setting to enable/disable whether the Tyk Dashboard will notify all Tyk Gateway nodes to hot-reload when an API definition is changed.

### license_key
EV: <b>TYK_DB_LICENSEKEY</b><br />
Type: `string`<br />

Your Tyk Dashboard license key

### hash_keys
EV: <b>TYK_DB_HASHKEYS</b><br />
Type: `bool`<br />

If your Tyk Gateway is using hashed keys, set this value to true so it matches. The Dashboard will now operate in a mode that is compatible with key hashing.

### enable_delete_key_by_hash
EV: <b>TYK_DB_ENABLEDELETEKEYBYHASH</b><br />
Type: `bool`<br />

To delete a key by its hash, set this option to true

### enable_update_key_by_hash
EV: <b>TYK_DB_ENABLEUPDATEKEYBYHASH</b><br />
Type: `bool`<br />

To update a key by its hash, set this option to true.

### enable_hashed_keys_listing
EV: <b>TYK_DB_ENABLEHASHEDKEYSLISTING</b><br />
Type: `bool`<br />

To retrieve a list of all key hash listings, set this option to true.

### email_backend
Tyk supports an interface-based email back-end system. We support `mandrill`, `sendgrid`, `amazonses` and `mailgun`. See [Outbound Email Configuration](https://tyk.io/docs/configure/outbound-email-configuration/) for more details on configuring these different providers.

### email_backend.enable_email_notifications
EV: <b>TYK_DB_EMAILBACKEND_ENABLEEMAILNOTIFICATIONS</b><br />
Type: `bool`<br />

Set to `true` to have Tyk send emails for things such as key approvals and portal sign ups.

### email_backend.code
EV: <b>TYK_DB_EMAILBACKEND_CODE</b><br />
Type: `string`<br />

The code of the back-end to use, `mandrill`, `sendgrid`, `amazonses` and `mailgun` are supported.

### email_backend.settings
EV: <b>TYK_DB_EMAILBACKEND_SETTINGS</b><br />
Type: `map[string]string`<br />

The custom settings sections for the back end system.

### email_backend.default_from_email
EV: <b>TYK_DB_EMAILBACKEND_DEFAULTFROMEMAIL</b><br />
Type: `string`<br />

The address to send email from.

### email_backend.default_from_name
EV: <b>TYK_DB_EMAILBACKEND_DEFAULTFROMNAME</b><br />
Type: `string`<br />

The name to use when sending emails.

### email_backend.dashboard_hostname
EV: <b>TYK_DB_EMAILBACKEND_DASHBOARDHOSTNAME</b><br />
Type: `string`<br />

Your public dashboard hostname.

### hide_listen_path
EV: <b>TYK_DB_HIDELISTENPATH</b><br />
Type: `bool`<br />

If you set this option to `true`, then the listen path will not be editable or visible in the Dashboard.

### use_sentry
EV: <b>TYK_DB_USESENTRY</b><br />
Type: `bool`<br />

The Tyk Dashboard has Sentry integration to externalise logging. Set this to true to enable the logger.

### sentry_code
EV: <b>TYK_DB_SENTRYCODE</b><br />
Type: `string`<br />

If you have a Sentry setup, or are using Getsentry, you can add the Sentry DSN here and Tyk will begin sending events.

### sentry_js_code
EV: <b>TYK_DB_SENTRYJSCODE</b><br />
Type: `string`<br />

To have the Dashboard report Javascript errors to you, add a seperate DSN here.

### enable_master_keys
EV: <b>TYK_DB_ENABLEMASTERKEYS</b><br />
Type: `bool`<br />

If this is set to true, session objects (key definitions) that do not have explicit access rights set will be allowed by Tyk. This means that keys that are created have access to ALL APIs, which in many cases is unwanted behaviour unless you are sure about what you are doing. To use this setting also requires the corresponding Gateway configuration setting `allow_master_keys` to be set to `true`.

### enable_duplicate_slugs
EV: <b>TYK_DB_ENABLEDUPLICATESLUGS</b><br />
Type: `bool`<br />

Setting this option to `true` will cause the dashboard to not validate against other listen paths.

### show_org_id
EV: <b>TYK_DB_SHOWORGID</b><br />
Type: `bool`<br />

Determines whether the Org ID will be shown in the Users -> Username detail page. This can be useful for quickly identifying your Org ID.

### host_config
Section to manage dashboard host names and domains

### host_config.enable_host_names
EV: <b>TYK_DB_HOSTCONFIG_ENABLEHOSTNAMES</b><br />
Type: `bool`<br />

The Tyk Dashboard can bind the Dashboard application to a specific domain name. Enable this option to have the Dashboard only allow access on a specific domain and 404 on any other host access (not recommended).

### host_config.disable_org_slug_prefix
EV: <b>TYK_DB_HOSTCONFIG_DISABLEORGSLUGPREFIX</b><br />
Type: `bool`<br />

By default, for developer portal, Tyk will add orgID prefix. Set to `true` if you have single tenant application or each portal on separate domain.

### host_config.hostname
EV: <b>TYK_DB_HOSTCONFIG_HOSTNAME</b><br />
Type: `string`<br />

The hostname to bind the Dashboard to. This must be a proper hostname and not localhost.

### host_config.override_hostname
EV: <b>TYK_DB_HOSTCONFIG_GATEWAYHOSTNAME</b><br />
Type: `string`<br />

Set this value to whatever hostname your **Tyk Gateway** is running on.

### host_config.portal_domains
EV: <b>TYK_DB_HOSTCONFIG_PORTALDOMAINS</b><br />
Type: `map[string]string`<br />

It is possible to hard-code portal domains (these override settings set by the Dashboard for routing purposes).

Example:
```
"portal_domains": {
.  "portal.com": "<orgID>"
}
```

### host_config.portal_root_path
EV: <b>TYK_DB_HOSTCONFIG_PORTALROOTPATH</b><br />
Type: `string`<br />

The root path for the portal.

### host_config.generate_secure_paths
EV: <b>TYK_DB_HOSTCONFIG_GENERATEHTTPS</b><br />
Type: `bool`<br />

If you prefer to have your URLs start with https, set this option to true.

### host_config.secure_cookies
EV: <b>TYK_DB_HOSTCONFIG_SECURECOOKIES</b><br />
Type: `bool`<br />

This enables HTTPS “secure” cookies.

### http_server_options
This section is reserved for settings relating to the HTTP server that powers the Dashboard.

### http_server_options.use_ssl
EV: <b>TYK_DB_HTTPSERVEROPTIONS_USESSL</b><br />
Type: `bool`<br />

Enable to use SSL.

### http_server_options.certificates
EV: <b>TYK_DB_HTTPSERVEROPTIONS_CERTIFICATES</b><br />
Type: `CertsData`<br />

Add a certificate block for each domain being covered by the application.

For example:

```
{
  "domain_name": "*.banana.com",
  "cert_file": "new.cert.cert",
  "key_file": "new.cert.key"
}
```

### http_server_options.ssl_certificates
EV: <b>TYK_DB_HTTPSERVEROPTIONS_SSLCERTIFICATES</b><br />
Type: `[]string`<br />

SSL certificates used by your Gateway server. A list of certificate path to files.

### http_server_options.min_version
EV: <b>TYK_DB_HTTPSERVEROPTIONS_MINVERSION</b><br />
Type: `uint16`<br />

Minimum TLS version. See [TLS and SSL](https://tyk.io/docs/basic-config-and-security/security/tls-and-ssl/).

### http_server_options.ssl_ciphers
EV: <b>TYK_DB_HTTPSERVEROPTIONS_CIPHERSUITES</b><br />
Type: `[]string`<br />

Array of allowed cipher suites as defined at https://golang.org/pkg/crypto/tls/#pkg-constants

### http_server_options.ssl_insecure_skip_verify
EV: <b>TYK_DB_HTTPSERVEROPTIONS_SSLINSECURESKIPVERIFY</b><br />
Type: `bool`<br />

Disable TLS verifiation

### http_server_options.prefer_server_ciphers
EV: <b>TYK_DB_HTTPSERVEROPTIONS_PREFERSERVERCIPHERSUITES</b><br />
Type: `bool`<br />

A boolean value to control whether the server selects the preferred ciphersuite for the client, or the preferred ciphersuite for the server. If set to true, the server preferences in the order of the elements listed in `ssl_ciphers` is used.

For more information see [TLS and SSL](https://tyk.io/docs/basic-config-and-security/security/tls-and-ssl/)

### security
This section controls login limits for both the Dashboard and the Developer Portal. The path for you audit log is also set here.

### security.allow_admin_reset_password
EV: <b>TYK_DB_SECURITY_ALLOWADMINRESETPASSWORD</b><br />
Type: `bool`<br />

This allows an admin user to reset the password of other users. The default is false.

### security.login_failure_username_limit
EV: <b>TYK_DB_SECURITY_LOGINFAILUREUSERNAMELIMIT</b><br />
Type: `int`<br />

Controls how many time a user can attempt to log in before being denied access. The default is 0.

### security.login_failure_ip_limit
EV: <b>TYK_DB_SECURITY_LOGINFAILUREIPLIMIT</b><br />
Type: `int`<br />

Controls how many times an IP Address can be used to attempt to log in before being denied access. The default is 0.

### security.login_failure_expiration
EV: <b>TYK_DB_SECURITY_LOGINFAILUREEXPIRATION</b><br />
Type: `int`<br />

Controls how long before the failure limits are reset in seconds. The default is 900 seconds.

### security.hide_login_failure_limit_error
EV: <b>TYK_DB_SECURITY_HIDELOGINFAILURELIMITERROR</b><br />
Type: `bool`<br />

By default it will show message like "Retry in N seconds.". In some secure environments it can be treated as leaking of secure context. This option makes failed login attemt to be shown as standard login failure.

### security.login_disallow_forward_proxy
EV: <b>TYK_DB_SECURITY_LOGINDISALLOWFORWARDPROXY</b><br />
Type: `bool`<br />

Set to `true` to allow the Tyk Dashboard login to ignore the host from the `X-Forwarded-For` header when accessing the Dashboard via a proxy. This can be useful for limiting retry attempts.

### security.audit_log_path
EV: <b>TYK_DB_SECURITY_AUDITLOGPATH</b><br />
Type: `string`<br />

This sets the path to your audit log and enables audit with default settings. It will log all user actions and response statuses to it. Security information such as passwords are not logged.

### security.user_password_max_days
EV: <b>TYK_DB_SECURITY_USERPASSWORDMAXDAYS</b><br />
Type: `int`<br />

Set the maximum lifetime of a password for a user. They will be prompted to reset if password lifetime exceeds the configured expiry value. e.g. if value set to 30 any user password set over 30 days in past will be considered invalid and must be reset.

### security.enforce_password_history
EV: <b>TYK_DB_SECURITY_ENFORCEPASSWORDHISTORY</b><br />
Type: `int`<br />

Set a maximum number of previous passwords used by a user that cannot be reused. For example, If set to 5 the user upon setting their password cannot reuse any of their 5 most recently used password for that Tyk user account.

### security.force_first_login_pw_reset
EV: <b>TYK_DB_SECURITY_FORCEFIRSTLOGINPWRESET</b><br />
Type: `bool`<br />

A newly created user will be forced to reset their password upon first login. Defaults to false.

### security.enable_content_security_policy
EV: <b>TYK_DB_SECURITY_ENABLECONTENTSECURITYPOLICY</b><br />
Type: `bool`<br />

Enable browser Content-Security-Policy, e.g. CSP. The default is false.

### security.allowed_content_sources
EV: <b>TYK_DB_SECURITY_ALLOWEDCONTENTSOURCES</b><br />
Type: `string`<br />

If CSP enabled, specify space separated string, with list of allowed resources.

### security.open_policy
OpenPolicy configuration

### security.open_policy.enabled
EV: <b>TYK_DB_SECURITY_OPENPOLICY_ENABLED</b><br />
Type: `bool`<br />

Enable OpenPolicy

### security.open_policy.debug
EV: <b>TYK_DB_SECURITY_OPENPOLICY_DEBUG</b><br />
Type: `bool`<br />

Enable OpenPolicy debug mode

### security.open_policy.enable_api
EV: <b>TYK_DB_SECURITY_OPENPOLICY_ENABLEAPI</b><br />
Type: `bool`<br />

Enable modify OpenPolicy rules via UI and API

### security.additional_permissions
EV: <b>TYK_DB_SECURITY_ADDITIONALPERMISSIONS</b><br />
Type: `map[ObjectGroup]string`<br />

Through this options, you can provide a list of additional permissions, that can be applief for existing or newly created users or user groups. Example:

```
{
  "api_developer": "API Developer",
  "custom_permission": "Custom Permission"
}
```

### security.private_certificate_encoding_secret
EV: <b>TYK_DB_SECURITY_PRIVATECERTIFICATEENCODINGSECRET</b><br />
Type: `string`<br />

When using SAML with embeded identity broker, is required to upload a certificate that is encoded by the gateway to store it safely, TIB needs the private key as well, hence it needs the same encoding secret so the information is decoded successfully. This value should match with the encoding secret set in the gateway config file, if not set then it will use by default tyk_api_config.secret to attempt to decode the certificate.

### ui
This section controls various settings for the look and feel of the Dashboard UI.

### ui.languages
EV: <b>TYK_DB_UI_LANGUAGES</b><br />
Type: `map[string]string`<br />

This section lists the current languages the Dashboard UI supports

### ui.hide_help
EV: <b>TYK_DB_UI_HIDEHELP</b><br />
Type: `bool`<br />

Set to true to hide the help tips.

### ui.default_lang
EV: <b>TYK_DB_UI_DEFAULTLANG</b><br />
Type: `string`<br />

This settings sets the default language for the UI. Default setting is `en`. Can be set to any of the other languages listed under `ui.languages`.

### ui.dont_allow_license_management
EV: <b>TYK_DB_UI_DONTALLOWLICENSEMANAGEMENT</b><br />
Type: `bool`<br />

Do not allow licens management screen

### ui.dev
EV: <b>TYK_DB_UI_DEV</b><br />
Type: `bool`<br />

Temporary : Enable dev mode feature on UI

### home_dir
EV: <b>TYK_DB_HOMEDIR</b><br />
Type: `string`<br />

The path to the home directory of Tyk Dashboard, this must be set in order for Portal templates and other files to be loadable. By default this is `/opt/tyk-dashboard/`.

### identity_broker
Tyk Dashboard has some preset Tyk Identity Broker configurations set up, for this integration to work, the Dashboard must be able to see an Identity Broker instance. The settings in this section are to enable this integration.

### identity_broker.enabled
EV: <b>TYK_DB_TIB_ENABLED</b><br />
Type: `bool`<br />

A boolean setting to enable the TIB integration (otherwise it will not appear in the UI).

### identity_broker.host
When using external TIB, this is the URL where it's reachable

### identity_broker.host.connection_string
EV: <b>TYK_DB_TIB_HOST_CONNECTIONSTRING</b><br />
Type: `string`<br />

The URL to the host. It must be in the form: http://domain:port.
Set this value only if you need to use external Tyk Identity Brokerr

### identity_broker.host.secret
EV: <b>TYK_DB_TIB_HOST_SECRET</b><br />
Type: `string`<br />

The shared secret between TIB and the Dashboard. This ensures all API requests between Dashboard and TIB are valid.

### identity_broker.ssl_insecure_skip_verify
EV: <b>TYK_DB_TIB_SSLINSECURESKIPVERIFY</b><br />
Type: `bool`<br />

Skip the TLS verification in the transport layer of the HTTP client. Is intended to have it enable for POC and testing purposes, do not use in production. Defaults to false.

### use_sharded_analytics
EV: <b>TYK_DB_USESHARDEDANLAYTICS</b><br />
Type: `bool`<br />

If using the `mongo-pump-selective` pump, where data is written to org-id-specific collections in MongoDB, then enabling this option will switch querying for analytics over to the independent collection entries.

### enable_aggregate_lookups
EV: <b>TYK_DB_ENABLEAGGREGATELOOKUPS</b><br />
Type: `bool`<br />

If using the new Aggregate Pump, Tyk Analytics can make use of the newer, faster Analytics lookup, to ensure that this can be made backwards compatible. This option must be set to `true`, in conjunction with the `aggregate_lookup_cutoff` value.

### aggregate_lookup_cutoff
EV: <b>TYK_DB_AGGREGATELOOKUPCUTOFF</b><br />
Type: `string`<br />

Set this to a date value of the form `DD/MM/YYYY`. Any analytics queries before this date will fall back to the raw base log data collection (slower). This is to ensure continuity of service and a smooth upgrade process with no loss of data.

### maintenance_mode
EV: <b>TYK_DB_MAINTENANCEMODE</b><br />
Type: `bool`<br />

Set to true to enable special maintanance screen for protal and dashboard

### allow_explicit_policy_id
EV: <b>TYK_DB_ALLOWEXPLICITPOLICYID</b><br />
Type: `bool`<br />

Set this value to `true` if you planning to use Tyk Sync or Tyk Operator

### disable_parallel_sessions
EV: <b>TYK_DB_DISABLEPARALLELSESSIONS</b><br />
Type: `bool`<br />

If set to true, it restricts an account to a single session. When an account logs in, any other open sessions for that account are logged out.

### dashboard_session_lifetime
EV: <b>TYK_DB_DASHBOARDSESSIONLIFETIME</b><br />
Type: `int64`<br />

Dashboard session lifetime

### portal_session_lifetime
EV: <b>TYK_DB_PORTALSESSIONLIFETIME</b><br />
Type: `int`<br />

Portal session lifetime

### alternative_dashboard_url
EV: <b>TYK_DB_ALTERNATIVEDASHBOARDURL</b><br />
Type: `string`<br />

Redirect all dashboard users to another URL

### sso_permission_defaults
EV: <b>TYK_DB_SSOPERMISSIONDEFAULTS</b><br />
Type: `map[ObjectGroup]string`<br />

Specify permissions of the user who logged in using Admin SSO API (for example Tyk Identity Broker). See [Dashboard Admin SSO API](https://tyk.io/docs/tyk-apis/tyk-dashboard-admin-api/sso/) for more details.

### sso_default_group_id
EV: <b>TYK_DB_SSODEFAULTUSERGROUP</b><br />
Type: `string`<br />

Default User Group which will be assigned to SSO users.

### sso_custom_login_url
EV: <b>TYK_DB_SSOCUSTOMLOGINURL</b><br />
Type: `string`<br />

Specify a custom dashboard login URL if you are using 3rd party authentication like TIB.

### sso_custom_portal_login_url
EV: <b>TYK_DB_SSOCUSTOMPORTALLOGINURL</b><br />
Type: `string`<br />

Specify custom portal login URL if you are using 3rd party authentication like TIB.

### sso_enable_user_lookup
EV: <b>TYK_DB_SSOENABLEUSERLOOKUP</b><br />
Type: `bool`<br />

When enabled, if dashboard already have user with given email found, it will be used for the login process

### audit
Enable dashboard audit. Example:

```
"audit": {
  "enabled": true,
  "format": "json",
  "path": "/tmp/audit.log",
  "detailed_recording": false
 },
```

Audit records the following fields for json format:
 * req_id - unique request ID
 * org_id - organisation ID
 * date - date in RFC1123 format
 * timestamp - unix timestamp
 * ip - IP address the request originated from
 * user - Dashboard user who performed the request
 * action - description of the action performed (i.e. Update User`)
 * method - HTTP-method of the request
 * url - URL of the request
 * status - HTTP response status of the request
 * diff - provides a diff of changed fields (available only for PUT requests)
 * request_dump - HTTP request copy (available if detailed_recording is set to true)
 * response_dump - HTTP response copy (available if detailed_recording is set to true)

### audit.enabled
EV: <b>TYK_DB_AUDIT_ENABLED</b><br />
Type: `bool`<br />

Enables audit logging, set to false by default.

### audit.format
EV: <b>TYK_DB_AUDIT_FORMAT</b><br />
Type: `string`<br />

Format of audit log file. Possible values are `json` and `text` (text is default value)

### audit.path
EV: <b>TYK_DB_AUDIT_PATH</b><br />
Type: `string`<br />

Path to the audit log

### audit.detailed_recording
EV: <b>TYK_DB_AUDIT_DETAILEDRECORDING</b><br />
Type: `bool`<br />

Enables detailed records in the audit log. Set to false by default. If set to `true` then audit log records will contain the http-request (without body) and full http-response including the body`

### enable_multi_org_users
EV: <b>TYK_DB_ENABLEMULTIORGUSERS</b><br />
Type: `bool`<br />

Enable support for users with the same email for multiple organisations

### health_check_endpoint_name
EV: <b>TYK_DB_HEALTHCHECKENDPOINTNAME</b><br />
Type: `string`<br />

Health check endpoint name. Default: /health

### edge_endpoints
EV: <b>TYK_DB_EDGEENDPOINTS</b><br />
Type: `EdgeEndpoints`<br />

List of Edge Gateways, that will be displayed in the Dashboard UI, so that you can select to which specific Gateway(s) you want to load an API into. Example:
```
 "edge_endpoints": [
 {
   "name": "Private Gateway",
   "endpoint": "https://payable-matter-gw.aws-euw2.cloud-ara.tyk.io",
   "tags": ["edge", "private-gw"]
 },
 {
   "name": "Public Gateway",
   "endpoint": "video-taped-gokart-gw.aws-usw2.cloud-ara.tyk.io",
   "tags": ["edge", "public-gw"]
 }
 ]
```

For every `Edge Gateway` there needs to be defined, its name, the ingress URL and a list of tags that APIs will use for triggering Gateways to load its configuration.
Note: For the Hybrid setup, users must fill in the Gateway URLs manually in the Tyk OAS API Definition servers section.


### portal_session_secret
EV: <b>TYK_DB_PORTALSESSIONSECRET</b><br />
Type: `string`<br />

Portal session secret

### dcr_ssl_insecure_skip_verify
EV: <b>TYK_DB_DCRSSLINSECURESKIPVERIFY</b><br />
Type: `bool`<br />

Ignore TLS verification for DCR calls

### private_key_path
EV: <b>TYK_DB_PRIVATEKEYPATH</b><br />
Type: `string`<br />

Private key path used to sign notifications coming to the gateways

### oauth_redirect_uri_separator
EV: <b>TYK_DB_OAUTHREDIRECTURISEPARATOR</b><br />
Type: `string`<br />

oAuth redirect URI separator

### statsd_connection_string
EV: <b>TYK_DB_STATSDCONNECTIONSTRING</b><br />
Type: `string`<br />

Enable StatsD monitoring when set to non empty. StatsD connection string.

### statsd_prefix
EV: <b>TYK_DB_STATSDPREFIX</b><br />
Type: `string`<br />

StatsD prefix

