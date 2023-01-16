Note that most messages are handled by the queuing system in the cron. This can be overridden per message type by enabling the "Create activity items direct instead of in Queue" settings.

In order to run the queue manually you can use `drush core-cron`. To see the items in the queue workers use `drush queue-list` and `drush queue-run <worker_name>` to trigger a worker manually.