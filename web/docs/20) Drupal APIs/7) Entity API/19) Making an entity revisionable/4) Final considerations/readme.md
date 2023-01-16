The implementation above is based on a basic Content Entity that is extending the base class `ContentEntityBase`. This class only set the `revision_id` field.

If you need to save additional information for your revisions, your entity should extend the class `RevisionableContentEntityBase` that brings the fields **Revision created time**, **Revision user**, **Revision log messages**. Or define the desired subset of fields yourself. Either way, in that case, make sure to also set the [revision\_metadata\_keys entity type annotation](https://www.drupal.org/docs/8/api/entity-api/converting-a-content-entity-type-to-be-revisionable-and-publishable).

As of Drupal 8.3 you can [enable revision UI](https://www.drupal.org/node/2835025) to add revision widget to entity form.