Construct a new form that extends [ConfirmFormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21ConfirmFormBase.php/class/ConfirmFormBase/8.3.x) and implements [ConfirmFormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21ConfirmFormInterface.php/interface/ConfirmFormInterface/8.3.x). At minimum, the following four functions from ConfirmFormInterface need to get implemented:

* public function submitForm(array &$form, FormStateInterface $form\_state);
* public function getFormId();
* public function getCancelUrl();
* public function getQuestion();

To see what else you can implement check the [ConfirmFormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21ConfirmFormInterface.php/interface/ConfirmFormInterface/8.3.x) API document.

In order to get the route parameter for use within the form you will need to create a field in the class to store it and you will need to implement buildForm() with an additional parameter for the route parameter.