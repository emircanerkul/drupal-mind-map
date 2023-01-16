---
url: >-
  https://www.drupal.org/docs/understanding-drupal/how-drupal-9-was-made-and-what-is-included/how-and-why-we-deprecated-code
description: >-
  Instead of working on Drupal 9 in its own git branch from the start, we built
  most of Drupal 9 in Drupal 8. This had various benefits: All new
  (Drupal-9-ready) code was deployed on Drupal 8 sites before Drupal 9 was even
  released. We worked out the issues in the new code in Drupal 8. Feedback was
  provided based on this new code so it can be improved in Drupal 8. This kept
  us from refactoring too much like we did with previous Drupal versions, so we
  will not end up with an entirely reworked API. The best user benefit is that
  the path of Drupal 8 to 9 is not a sudden jump.
published_time: '2019-05-07T12:21:24+00:00'
modified_time: '2020-08-18T18:14:48+00:00'
---
Instead of working on Drupal 9 in its own git branch from the start, we built most of Drupal 9 in Drupal 8\. This had various benefits:

1. All new (Drupal-9-ready) code was deployed on Drupal 8 sites before Drupal 9 was even released.
2. We worked out the issues in the new code in Drupal 8.
3. Feedback was provided based on this new code so it can be improved in Drupal 8.
4. This kept us from refactoring too much like we did with previous Drupal versions, so we will not end up with an entirely reworked API.

The best user benefit is that the path of Drupal 8 to 9 is not a sudden jump. Instead, it is several smaller steps that are much easier to adopt.

The same strategy will be used to build Drupal 10 in Drupal 9.