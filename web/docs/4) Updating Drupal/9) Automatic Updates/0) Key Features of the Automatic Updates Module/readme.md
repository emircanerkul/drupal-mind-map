### **Update readiness checks**

Not all sites are able to always update. The readiness checks are an automated method to determine if a site is ready for automatically updating once a new release is provided to the community. For example, sites that have un-run database updates, are mounted on read-only file systems or do not have sufficient disk space to update in-place can't receive automatic updates. If your site is failing readiness checks and a PSA is released, it is important to resolve the underlying readiness issues so the site can quickly be updated.

### **In-place updates**

Once the PSA service has notified a Drupal site owner of an available update, and the readiness checks have confirmed that the site is ready to be updated, the site administrator can update via the Update form.