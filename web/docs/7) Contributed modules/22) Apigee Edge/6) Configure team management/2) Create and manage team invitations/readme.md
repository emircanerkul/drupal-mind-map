The team invitation feature can be used to customize invitation emails, invite users to a team, and manage team invitations once sent. In order to utilize this feature, confirm that the appropriate global and team permissions are configured correctly, as shown in the table below.

| Permission Type | Role               | Permission                                             |
| --------------- | ------------------ | ------------------------------------------------------ |
| Global          | Authenticated user | Accept own team invitation Decline own team invitation |
| Global          | Administrator      | Administer team invitation settings                    |
| Team            | Administrator      | Manage team members and invitations                    |

### Configure team invitations

To configure team invitations to send to users:

1. Select **Configuration** \> **Apigee Edge** \> **Teams**.
2. Click the **Team invitation** tab.
3. Enter the desired number of days before invitations expire into the "Expiry days" field.  
   * To handle team invitation expiration, you need a configured cron maintenance task.  
   * See [Configuring Cron](https://www.drupal.org/docs/user%5Fguide/en/security-cron.html) for more information.
4. Configure the email subject and body of the team invitation. There are two email templates available; one for existing users and one for new users.
5. Click **Save configuration**.

![Team invite tab display](https://www.drupal.org/files/invite-tab.jpg)

### Invite users to a team

Any user with the Global "Manage team members" permission or the Team "Manage team members and invitations" permission can invite users to a team.

1. Select **Teams** in the top navigation of your application.
2. Click the name of the team to view the team details.
3. Click the **Members** tab to view the team members.
4. Click the **Invite members** button.  
   * Fill in the user email addresses, separated by commas.  
   * Select the roles for each member.
5. Click **Invite members**.

![Invite members view](https://www.drupal.org/files/invite-members.jpg)

### Manage team invitations

From the **Members** tab, you can find a list of all current and invited team members, including pending invitations. 

![](https://www.drupal.org/files/manage-invites.jpg)

#### Resend team invitation

To resend an invitation email, locate the invitation recipient under **Pending Invitations** and click **Resend**.

#### Revoke team invitation

To revoke a team invitation, locate the invitation recipient under **Pending Invitations** and select **Revoke** from the **Operations**  drop-down.

#### View invitations as a user

To view invitations sent to your user account, select **My account > Invitations**.