1. Navigate to the Logging and Errors configuration page (/admin/config/development/logging)
2. In the Errors and Messages section, specify whether messages will be displayed. In production environments, this is generally set to None.
3. In the Database Log Entries to Keep field, select the number of log entries to retain in the database. A cron job must run for this setting to be applied.