Follow the steps below to configure the Google Cloud service account, service account roles, and service account keys needed to connect your developer portal to an Apigee X or hybrid org on Apigee.

**Note**: Before you begin, ensure that you have access to the Google Cloud account and Google Cloud project ID bound to your Apigee X or hybrid org. See [Create a Google Cloud account](https://docs.apigee.com/hybrid/precog-gcpaccount) and [Create a Google Cloud project](https://docs.apigee.com/hybrid/precog-gcpaccount) for more information about the credentials needed to work with an Apigee X or hybrid org.

### Create a Google Cloud service account

To connect your developer portal to an Apigee X or hybrid org on Apigee, you need a Google Cloud service account. The Google Cloud service account manages the connection credentials required for communication between the developer portal and the Apigee X or hybrid org on Apigee.

For more information on the use of service accounts to make API calls and how they differ from user accounts, see [What are service accounts](https://cloud.google.com/iam/docs/service-accounts#what%5Fare%5Fservice%5Faccounts).

**Note**: The service account you create should ONLY be used for your developer portal. We recommend that you do not reuse this service account to manage tasks for other applications.

You can create a service account using the Google Cloud console or using the [gcloud command-line tool](https://cloud.google.com/sdk/).

* To create a service account using the Console, follow steps 1-6 in [Use the Google Cloud console](https://docs.apigee.com/hybrid/sa-about#gcp). **NOTE:** To create service accounts in the Google Cloud console, you must have the Google Cloud Service Account Admin role or greater.
* To create a service account using the `gcloud` command-line tool, follow the steps outlined in [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts).

### Set the service account roles

Next, assign the **Apigee Developer Administrator** role to the service account you just created. This will set the service account’s scope and access privileges, permitting the service account to connect to your Apigee X or hybrid org from your Google Cloud project.

You can assign the **Apigee Developer Administrator** role to the service account using the Google Cloud console or using the [gCloud command-line tool](https://cloud.google.com/sdk/).

* To assign the role using the console, follow steps 7-9 in [Use the Google Cloud console](https://docs.apigee.com/hybrid/sa-about#gcp).
* To create a service account using the `gcloud` command-line tool, follow the steps outlined in the `gcloud` tab of [Granting roles to a service account for specific resources](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting%5Faccess%5Fto%5Fa%5Fservice%5Faccount%5Ffor%5Fa%5Fresource).

### Generate a Google Cloud service account key

Once you have created a Google Cloud service account and assigned the appropriate role to the service account, you need to generate a Google Cloud service account key.

You can generate a Google Cloud service account key using the Google Cloud console or using the [gCloud command-line tool](https://cloud.google.com/sdk/).

* To generate a key using the console, follow steps 9-11 in [Use the Google Cloud console](https://docs.apigee.com/hybrid/sa-about#gcp) and download the JSON key to your local machine.
* To generate a key using the `gcloud` command-line tool, follow the steps outlined for the `gcloud` command in [Creating service account keys](creating%5Fservice%5Faccount%5Fkeys).

### Add the Google Cloud service account key to the module configuration

Once you have generated the JSON file containing your Google Cloud service account key, add it to your Apigee Edge module configuration.

1. Select **Configuration > Apigee Edge > General** in the Drupal administration menu.
2. Select the **Credentials** tab.
3. Select “Apigee X” as the **Apigee Instance type**.
4. Enter the name of your Apigee X or hybrid org into the **Organization** field.
5. Copy and paste the contents of your Google Cloud service account key JSON file into the **GCP service account key** text area, as shown in the figure below:  
![Apigee X connection settings](https://www.drupal.org/files/apigeex-connection-settings.png)
6. Click **Save configuration.**