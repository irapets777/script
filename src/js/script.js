const ageOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ageTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const age = ageOne.concat(ageTwo);
const age = [...ageOne, ...ageTwo];  /**спред */

console.log(age);

const response = {
  "data": [
      {
          "id": 119,
          "attributes": {
              "title": " Шукаю няню у Львові",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "-shukaiu-nianiu-u-lvovi-1672088266",
              "createdAt": "2022-12-26T20:57:45.690Z",
              "updatedAt": "2023-01-24T18:27:37.763Z",
              "publishedAt": "2022-12-26T20:57:45.682Z",
              "cost": 10000,
              "is_urgent": true,
              "location_title": "Львів, Львівська область, Україна, 79000",
              "location_lat": 49.839683,
              "location_lng": 24.029717,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 1,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 5,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:54.216Z",
                              "updatedAt": "2022-08-16T08:12:55.331Z",
                              "publishedAt": "2022-08-16T08:12:55.327Z",
                              "value": "pl",
                              "label": "Польська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "fixed",
                              "label": "Одноразова",
                              "createdAt": "2022-08-16T08:13:51.518Z",
                              "updatedAt": "2023-01-04T17:39:29.930Z",
                              "publishedAt": "2022-08-16T08:13:55.169Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "value": "3 ",
                              "label": "3 роки",
                              "createdAt": "2022-08-16T08:10:56.934Z",
                              "updatedAt": "2022-08-22T07:27:33.849Z",
                              "publishedAt": "2022-08-16T08:10:58.300Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 121,
          "attributes": {
              "title": "Шукаю няню для дитини 2 міс",
              "description": "Доброго дня. Шукаю няню для дитини 2 міс.. Я працюю дома та донечка на ГВ. До обов’язків входить: прогулянки, догляд, ігри та розваги згідно віку.\nГрафік: пн-пт 9:00-18:00\nХарчування: з задоволенням пригощу тим, чим харчуємося ми.\nРозташування: 3 хв від метро Мінська",
              "slug": "shukaiu-nianiu-dlia-dytyny-2-mis-1672416217",
              "createdAt": "2022-12-30T16:03:37.449Z",
              "updatedAt": "2023-01-24T18:26:54.127Z",
              "publishedAt": "2022-12-30T16:03:37.429Z",
              "cost": 15000,
              "is_urgent": false,
              "location_title": "Київ, Україна, 02000",
              "location_lat": 50.4501,
              "location_lng": 30.5234,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": []
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "fixed",
                              "label": "Одноразова",
                              "createdAt": "2022-08-16T08:13:51.518Z",
                              "updatedAt": "2023-01-04T17:39:29.930Z",
                              "publishedAt": "2022-08-16T08:13:55.169Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 71,
                      "attributes": {
                          "username": "Karina",
                          "email": "test1@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T15:58:38.015Z",
                          "updatedAt": "2023-01-26T17:46:53.481Z",
                          "first_name": "Каріна",
                          "last_name": "Мельник",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "melnik",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "0931112233",
                          "notifications_settings": null,
                          "notifications": null,
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": false,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 120,
          "attributes": {
              "title": "В пошуках няні на новорічні свята",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "v-poshukakh-niani-na-novorichni-sviata-1672415793",
              "createdAt": "2022-12-30T15:56:33.359Z",
              "updatedAt": "2023-01-24T18:27:45.716Z",
              "publishedAt": "2022-12-30T15:56:33.349Z",
              "cost": 2400,
              "is_urgent": true,
              "location_title": "Сихів, Львів, Львівська область, Україна, 79000",
              "location_lat": 49.7916616,
              "location_lng": 24.0645386,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 1,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "fixed",
                              "label": "Одноразова",
                              "createdAt": "2022-08-16T08:13:51.518Z",
                              "updatedAt": "2023-01-04T17:39:29.930Z",
                              "publishedAt": "2022-08-16T08:13:55.169Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "1",
                              "label": "1 рік",
                              "createdAt": "2022-08-16T08:10:09.320Z",
                              "updatedAt": "2022-08-22T07:27:22.882Z",
                              "publishedAt": "2022-08-16T08:10:11.572Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 70,
                      "attributes": {
                          "username": "client_account",
                          "email": "client_account@test.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T15:54:14.986Z",
                          "updatedAt": "2022-12-30T15:59:30.203Z",
                          "first_name": "Клієнт",
                          "last_name": "Сервісу",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": null,
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380936868250",
                          "notifications_settings": null,
                          "notifications": {
                              "data": [
                                  {
                                      "id": 246,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-30T15:59:11.039Z",
                                      "updatedAt": "2022-12-30T15:59:11.039Z",
                                      "event_name": "new_message",
                                      "relation_id": 459
                                  }
                              ],
                              "last_updated": "2022-12-30T15:59:30.196Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": null,
                          "inclusive_kids": null,
                          "driving_licence": null,
                          "living_with_family": null
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 122,
          "attributes": {
              "title": "Шукаємо няню для хлопчика 10 місяців",
              "description": "Доброго дня!\nЦікавить повний день з 9.00 до 17.00 ( к обговоренню).\nТериторіально знаходимося с.Софіївська Борщагівка (ЖК Софія).\nЗа деталями прошу писати в приватні.\nБуду вдячна за хороші рекомендації!",
              "slug": "shukaiemo-nianiu-dlia-khlopchyka-10-misiatsiv-1672416685",
              "createdAt": "2022-12-30T16:11:25.353Z",
              "updatedAt": "2023-01-24T18:27:03.541Z",
              "publishedAt": "2022-12-30T16:11:25.340Z",
              "cost": 6000,
              "is_urgent": false,
              "location_title": "Київ, Україна, 02000",
              "location_lat": 50.4501,
              "location_lng": 30.5234,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:08.616Z",
                              "updatedAt": "2022-08-16T08:12:09.897Z",
                              "publishedAt": "2022-08-16T08:12:09.894Z",
                              "value": "eng",
                              "label": "Англійська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "value": "3 ",
                              "label": "3 роки",
                              "createdAt": "2022-08-16T08:10:56.934Z",
                              "updatedAt": "2022-08-22T07:27:33.849Z",
                              "publishedAt": "2022-08-16T08:10:58.300Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 73,
                      "attributes": {
                          "username": "Sonya",
                          "email": "test3@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T16:08:53.186Z",
                          "updatedAt": "2022-12-30T16:09:22.561Z",
                          "first_name": "Софія",
                          "last_name": "Довгонюк",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "dovgonyuk",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "0731112233",
                          "notifications_settings": null,
                          "notifications": null,
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": null,
                          "inclusive_kids": null,
                          "driving_licence": null,
                          "living_with_family": null
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 118,
          "attributes": {
              "title": "Шукаю нняню для доньки, 7 років",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "shukaiu-nnianiu-dlia-donky-7-rokiv-1672087460",
              "createdAt": "2022-12-26T20:44:20.204Z",
              "updatedAt": "2023-01-24T18:27:30.682Z",
              "publishedAt": "2022-12-26T20:44:20.186Z",
              "cost": 3000,
              "is_urgent": false,
              "location_title": "Трускавець, Львівська область, Україна, 82200",
              "location_lat": 49.2760303,
              "location_lng": 23.5105576,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "babysitter",
                              "label": "територія няні",
                              "createdAt": "2022-08-16T08:15:34.802Z",
                              "updatedAt": "2022-08-22T07:29:34.280Z",
                              "publishedAt": "2022-08-16T08:15:36.086Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 2,
                      "attributes": {
                          "value": "2",
                          "label": "2 дитини",
                          "createdAt": "2022-08-16T08:09:04.594Z",
                          "updatedAt": "2022-12-26T20:55:18.348Z",
                          "publishedAt": "2022-08-16T08:09:05.991Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 123,
          "attributes": {
              "title": "Шукаю старшого  друга для свого майже трирічки. ",
              "description": "Доброго дня, спільното.\nСину два роки і десять місяців.\nДва - три рази на тиждень 2-3 години.  Спілкування, заняття по віку.  Надалі, у\nприватних повідомленнях з'ясуємо всі деталі.",
              "slug": "shukaiu-starshoho--druha-dlia-svoho-maizhe-tryrichky--1672418345",
              "createdAt": "2022-12-30T16:39:04.756Z",
              "updatedAt": "2023-01-24T18:28:01.720Z",
              "publishedAt": "2022-12-30T16:39:04.741Z",
              "cost": 14000,
              "is_urgent": false,
              "location_title": "Львів, Львівська область, Україна, 79000",
              "location_lat": 49.839683,
              "location_lng": 24.029717,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 1,
              "hires_count": null,
              "new_proposals_count": 1,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": []
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "value": "neutral",
                              "label": "нейтральна територія",
                              "createdAt": "2022-08-16T08:16:05.740Z",
                              "updatedAt": "2022-08-22T07:29:41.157Z",
                              "publishedAt": "2022-08-16T08:16:06.857Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "1",
                              "label": "1 рік",
                              "createdAt": "2022-08-16T08:10:09.320Z",
                              "updatedAt": "2022-08-22T07:27:22.882Z",
                              "publishedAt": "2022-08-16T08:10:11.572Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 74,
                      "attributes": {
                          "username": "Anna",
                          "email": "test4@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T16:12:25.367Z",
                          "updatedAt": "2023-01-26T17:46:36.449Z",
                          "first_name": "Анна",
                          "last_name": "Войтович",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "vojtovich",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "0121112233",
                          "notifications_settings": null,
                          "notifications": {
                              "data": [
                                  {
                                      "id": 250,
                                      "type": "proposal",
                                      "is_seen": false,
                                      "createdAt": "2023-01-05T11:40:15.950Z",
                                      "updatedAt": "2023-01-05T11:40:15.950Z",
                                      "event_name": "new_proposal",
                                      "relation_id": 194
                                  }
                              ],
                              "last_updated": "2023-01-05T11:40:16.724Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": false,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 124,
          "attributes": {
              "title": "Працюючі батьки шукають супроводжуючу для 8-ї дівчинки",
              "description": "Працюючі батьки шукають супроводжуючу для 8-ї дівчинки на 1-2 години в будні дні.\nПотрібно забирати зі школи переважно о 13:20 (Севастопольська площа) та заводити в музичну школу (все в пішій доступності).",
              "slug": "pratsiuiuchi-batky-shukaiut-suprovodzhuiuchu-dlia-8-i-divchynky-1672418665",
              "createdAt": "2022-12-30T16:44:25.557Z",
              "updatedAt": "2023-01-24T18:28:06.554Z",
              "publishedAt": "2022-12-30T16:44:25.548Z",
              "cost": 8000,
              "is_urgent": false,
              "location_title": "Харків, Харківська область, Україна",
              "location_lat": 49.9935,
              "location_lng": 36.230383,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": []
              },
              "languages": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:08.616Z",
                              "updatedAt": "2022-08-16T08:12:09.897Z",
                              "publishedAt": "2022-08-16T08:12:09.894Z",
                              "value": "eng",
                              "label": "Англійська"
                          }
                      },
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "value": "neutral",
                              "label": "нейтральна територія",
                              "createdAt": "2022-08-16T08:16:05.740Z",
                              "updatedAt": "2022-08-22T07:29:41.157Z",
                              "publishedAt": "2022-08-16T08:16:06.857Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "fixed",
                              "label": "Одноразова",
                              "createdAt": "2022-08-16T08:13:51.518Z",
                              "updatedAt": "2023-01-04T17:39:29.930Z",
                              "publishedAt": "2022-08-16T08:13:55.169Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "1",
                              "label": "1 рік",
                              "createdAt": "2022-08-16T08:10:09.320Z",
                              "updatedAt": "2022-08-22T07:27:22.882Z",
                              "publishedAt": "2022-08-16T08:10:11.572Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 75,
                      "attributes": {
                          "username": "Solomiia",
                          "email": "test5@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T16:41:56.045Z",
                          "updatedAt": "2022-12-30T16:42:31.238Z",
                          "first_name": "Соломія",
                          "last_name": "Бойко",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "bojko",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "01233344230",
                          "notifications_settings": null,
                          "notifications": null,
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": null,
                          "inclusive_kids": null,
                          "driving_licence": null,
                          "living_with_family": null
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 125,
          "attributes": {
              "title": "Ищу няню для девочки 1 год 3 месяца ",
              "description": "Добрый день!\nИщу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать!\nТребования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет.\nГлавное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает.\nОбязанности няни:\nГигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама)\nГрафик работы \nС 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00\nС понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается.  Другой график не рассматриваем, пожалуйста  просмотрите маршрут прежде чем писать.\nP.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
              "slug": "yshchu-nianiu-dlia-devochky-1-hod-3-mesiatsa--1672419150",
              "createdAt": "2022-12-30T16:52:30.176Z",
              "updatedAt": "2023-01-24T18:28:12.668Z",
              "publishedAt": "2022-12-30T16:52:30.151Z",
              "cost": 25000,
              "is_urgent": true,
              "location_title": "Одеса, Одеська область, Україна, 65000",
              "location_lat": 46.482526,
              "location_lng": 30.7233095,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:08.616Z",
                              "updatedAt": "2022-08-16T08:12:09.897Z",
                              "publishedAt": "2022-08-16T08:12:09.894Z",
                              "value": "eng",
                              "label": "Англійська"
                          }
                      },
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "value": "4",
                              "label": "4 роки",
                              "createdAt": "2022-08-16T08:11:21.413Z",
                              "updatedAt": "2022-08-22T07:27:39.048Z",
                              "publishedAt": "2022-08-16T08:11:22.779Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 76,
                      "attributes": {
                          "username": "Mariia",
                          "email": "test6@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T16:49:08.004Z",
                          "updatedAt": "2022-12-30T16:50:19.783Z",
                          "first_name": "Марія",
                          "last_name": "Курочка",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "kurochka",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "0999999999",
                          "notifications_settings": null,
                          "notifications": null,
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": null,
                          "inclusive_kids": null,
                          "driving_licence": null,
                          "living_with_family": null
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 128,
          "attributes": {
              "title": "Шукаю нняню для доньки, 7 років",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv",
              "createdAt": "2023-01-15T12:10:57.582Z",
              "updatedAt": "2023-01-24T18:26:27.600Z",
              "publishedAt": "2023-01-15T12:11:11.507Z",
              "cost": 3000,
              "is_urgent": false,
              "location_title": "Трускавець, Львівська область, Україна, 82200",
              "location_lat": 49.2760303,
              "location_lng": 23.5105576,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "babysitter",
                              "label": "територія няні",
                              "createdAt": "2022-08-16T08:15:34.802Z",
                              "updatedAt": "2022-08-22T07:29:34.280Z",
                              "publishedAt": "2022-08-16T08:15:36.086Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 2,
                      "attributes": {
                          "value": "2",
                          "label": "2 дитини",
                          "createdAt": "2022-08-16T08:09:04.594Z",
                          "updatedAt": "2022-12-26T20:55:18.348Z",
                          "publishedAt": "2022-08-16T08:09:05.991Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 129,
          "attributes": {
              "title": "Шукаю нняню для доньки, 7 років",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv-1",
              "createdAt": "2023-01-15T12:11:23.812Z",
              "updatedAt": "2023-01-24T18:26:22.911Z",
              "publishedAt": "2023-01-15T12:11:24.800Z",
              "cost": 3000,
              "is_urgent": false,
              "location_title": "Трускавець, Львівська область, Україна, 82200",
              "location_lat": 49.2760303,
              "location_lng": 23.5105576,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "babysitter",
                              "label": "територія няні",
                              "createdAt": "2022-08-16T08:15:34.802Z",
                              "updatedAt": "2022-08-22T07:29:34.280Z",
                              "publishedAt": "2022-08-16T08:15:36.086Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 2,
                      "attributes": {
                          "value": "2",
                          "label": "2 дитини",
                          "createdAt": "2022-08-16T08:09:04.594Z",
                          "updatedAt": "2022-12-26T20:55:18.348Z",
                          "publishedAt": "2022-08-16T08:09:05.991Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 130,
          "attributes": {
              "title": "Шукаю нняню для доньки, 7 років",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "slug": "shukayu-nnyanyu-dlya-donki-7-rokiv-2",
              "createdAt": "2023-01-15T12:11:30.378Z",
              "updatedAt": "2023-01-24T18:26:16.371Z",
              "publishedAt": "2023-01-15T12:11:32.474Z",
              "cost": 3000,
              "is_urgent": false,
              "location_title": "Трускавець, Львівська область, Україна, 82200",
              "location_lat": 49.2760303,
              "location_lng": 23.5105576,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "babysitter",
                              "label": "територія няні",
                              "createdAt": "2022-08-16T08:15:34.802Z",
                              "updatedAt": "2022-08-22T07:29:34.280Z",
                              "publishedAt": "2022-08-16T08:15:36.086Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 2,
                      "attributes": {
                          "value": "2",
                          "label": "2 дитини",
                          "createdAt": "2022-08-16T08:09:04.594Z",
                          "updatedAt": "2022-12-26T20:55:18.348Z",
                          "publishedAt": "2022-08-16T08:09:05.991Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 126,
          "attributes": {
              "title": "Шукаємо няню у Дрогобичі",
              "description": "Добрый день! Ищу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать! Требования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет. Главное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает. Обязанности няни: Гигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама) График работы С 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00 С понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается. Другой график не рассматриваем, пожалуйста просмотрите маршрут прежде чем писать. P.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
              "slug": "shukaiemo-nianiu-u-drohobychi-1673440517",
              "createdAt": "2023-01-11T12:35:17.198Z",
              "updatedAt": "2023-01-24T18:28:21.515Z",
              "publishedAt": "2023-01-11T12:35:17.185Z",
              "cost": 10000,
              "is_urgent": false,
              "location_title": "Дрогобич, Львівська область, Україна, 82100",
              "location_lat": 49.3655734,
              "location_lng": 23.4860479,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 8,
                          "attributes": {
                              "createdAt": "2023-01-09T18:29:08.888Z",
                              "updatedAt": "2023-01-09T18:29:09.987Z",
                              "publishedAt": "2023-01-09T18:29:09.984Z",
                              "label": "готування",
                              "value": "cooking"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "babysitter",
                              "label": "територія няні",
                              "createdAt": "2022-08-16T08:15:34.802Z",
                              "updatedAt": "2022-08-22T07:29:34.280Z",
                              "publishedAt": "2022-08-16T08:15:36.086Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "fixed",
                              "label": "Одноразова",
                              "createdAt": "2022-08-16T08:13:51.518Z",
                              "updatedAt": "2023-01-04T17:39:29.930Z",
                              "publishedAt": "2022-08-16T08:13:55.169Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 2,
                          "attributes": {
                              "value": "2 ",
                              "label": "2 роки",
                              "createdAt": "2022-08-16T08:10:35.346Z",
                              "updatedAt": "2022-08-22T07:27:28.274Z",
                              "publishedAt": "2022-08-16T08:10:36.730Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 51,
                      "attributes": {
                          "username": "client",
                          "email": "mr.archee@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-02T09:45:48.989Z",
                          "updatedAt": "2023-01-23T20:11:17.302Z",
                          "first_name": "Wednesday",
                          "last_name": "Adams",
                          "role_user": "client",
                          "about": "some info about me",
                          "rating": null,
                          "location_title": "Трускавець, Львівська область, Україна, 82200",
                          "slug": "doe",
                          "location_lat": 49.2813855,
                          "location_lng": 23.494314,
                          "saved_jobs": [
                              130
                          ],
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "+380632767675",
                          "notifications_settings": {
                              "offers": false,
                              "messages": true,
                              "contracts": false,
                              "new_proposal": false,
                              "answer_on_proposal": false
                          },
                          "notifications": {
                              "data": [
                                  {
                                      "id": 241,
                                      "type": "message",
                                      "is_seen": false,
                                      "createdAt": "2022-12-08T12:33:57.204Z",
                                      "updatedAt": "2022-12-08T12:33:57.204Z",
                                      "event_name": "new_message",
                                      "relation_id": 456
                                  }
                              ],
                              "last_updated": "2023-01-02T21:27:51.847Z"
                          },
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": "https://momseek.fra1.digitaloceanspaces.com/strapi/7f25238e52b2359a6e1854a669e2cffe.png",
                          "voted_comments": [
                              {
                                  "id": 7,
                                  "vote": true
                              },
                              {
                                  "id": 3,
                                  "vote": false
                              },
                              {
                                  "id": 6,
                                  "vote": false
                              },
                              {
                                  "id": 4,
                                  "vote": true
                              },
                              {
                                  "id": 2,
                                  "vote": true
                              },
                              {
                                  "id": 8,
                                  "vote": true
                              }
                          ],
                          "onboarding_completed": null,
                          "inclusive_kids": false,
                          "driving_licence": false,
                          "living_with_family": false
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 2,
                      "attributes": {
                          "value": "2",
                          "label": "2 дитини",
                          "createdAt": "2022-08-16T08:09:04.594Z",
                          "updatedAt": "2022-12-26T20:55:18.348Z",
                          "publishedAt": "2022-08-16T08:09:05.991Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      },
      {
          "id": 127,
          "attributes": {
              "title": "Ищу няню для девочки 1 год 3 месяца ",
              "description": "Добрый день!\nИщу няню для девочки 1 год 3 месяца очень активная, веселая любит танцевать!\nТребования к няне : Чистоплотная, активная, веселая, терпеливая уравновешенная. Наличие опыта работы. Возраст до 55 лет.\nГлавное требование обеспечение веселого времени препровождения (знание песенок, стишков) и безопасность ребенка!! Девочка, очень активная с легкостью взбирается на поверхности и быстро бегает.\nОбязанности няни:\nГигиена, кормление, чтение книг, прогулки, укладывание на сон( ребенок спит 2 раза в день в коляске на улице) поддержание порядка в комнате имеется ввиду чистота игрушек и порядок в них( уборкой и готовкой занимается мама)\nГрафик работы \nС 7:30 - 8:00 до минимум 16:00 желательно до 17/18:00\nС понедельника по пятницу в выходные по договоренности желательно 1 рабочий выходной график оговаривается.  Другой график не рассматриваем, пожалуйста  просмотрите маршрут прежде чем писать.\nP.S Если вас заинтересовало предложение пишите , пожалуйста, в личные сообщения с указание вашего возраста и пожеланиями по оплате.",
              "slug": "ishhu-nyanyu-dlya-devochki-1-god-3-mesyacza",
              "createdAt": "2023-01-15T11:58:03.229Z",
              "updatedAt": "2023-01-24T18:28:28.891Z",
              "publishedAt": "2023-01-24T18:28:28.885Z",
              "cost": 25000,
              "is_urgent": true,
              "location_title": "Одеса, Одеська область, Україна, 65000",
              "location_lat": 46.482526,
              "location_lng": 30.7233095,
              "is_active": true,
              "is_contract": false,
              "proposals_count": 0,
              "hires_count": null,
              "new_proposals_count": 0,
              "living_with_family": false,
              "inclusive_kids": false,
              "driving_licence": false,
              "additionallies": {
                  "data": [
                      {
                          "id": 7,
                          "attributes": {
                              "createdAt": "2022-11-23T13:51:57.274Z",
                              "updatedAt": "2022-11-23T13:51:59.194Z",
                              "publishedAt": "2022-11-23T13:51:59.190Z",
                              "label": "Прибирання",
                              "value": "cleaning"
                          }
                      }
                  ]
              },
              "languages": {
                  "data": [
                      {
                          "id": 3,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:08.616Z",
                              "updatedAt": "2022-08-16T08:12:09.897Z",
                              "publishedAt": "2022-08-16T08:12:09.894Z",
                              "value": "eng",
                              "label": "Англійська"
                          }
                      },
                      {
                          "id": 4,
                          "attributes": {
                              "createdAt": "2022-08-16T08:12:24.542Z",
                              "updatedAt": "2022-08-16T08:12:26.070Z",
                              "publishedAt": "2022-08-16T08:12:26.067Z",
                              "value": "ua",
                              "label": "Українська"
                          }
                      }
                  ]
              },
              "territories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "parent",
                              "label": "територія батьків",
                              "createdAt": "2022-08-16T08:14:46.698Z",
                              "updatedAt": "2022-08-22T07:29:48.710Z",
                              "publishedAt": "2022-08-16T08:14:47.844Z"
                          }
                      }
                  ]
              },
              "payment_types": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "value": "monthly",
                              "label": "Помісячно",
                              "createdAt": "2022-08-16T08:13:35.641Z",
                              "updatedAt": "2023-01-04T17:39:36.033Z",
                              "publishedAt": "2022-08-16T08:13:37.278Z"
                          }
                      }
                  ]
              },
              "experiences": {
                  "data": [
                      {
                          "id": 4,
                          "attributes": {
                              "value": "4",
                              "label": "4 роки",
                              "createdAt": "2022-08-16T08:11:21.413Z",
                              "updatedAt": "2022-08-22T07:27:39.048Z",
                              "publishedAt": "2022-08-16T08:11:22.779Z"
                          }
                      }
                  ]
              },
              "author": {
                  "data": {
                      "id": 76,
                      "attributes": {
                          "username": "Mariia",
                          "email": "test6@gmail.com",
                          "provider": "local",
                          "confirmed": true,
                          "blocked": false,
                          "createdAt": "2022-12-30T16:49:08.004Z",
                          "updatedAt": "2022-12-30T16:50:19.783Z",
                          "first_name": "Марія",
                          "last_name": "Курочка",
                          "role_user": "client",
                          "about": null,
                          "rating": null,
                          "location_title": null,
                          "slug": "kurochka",
                          "location_lat": null,
                          "location_lng": null,
                          "saved_jobs": null,
                          "saved_profiles": null,
                          "status": null,
                          "proposals_count": null,
                          "views": null,
                          "phone": "0999999999",
                          "notifications_settings": null,
                          "notifications": null,
                          "average_rating": 0,
                          "connects_count": 10,
                          "picture_url": null,
                          "voted_comments": null,
                          "onboarding_completed": null,
                          "inclusive_kids": null,
                          "driving_licence": null,
                          "living_with_family": null
                      }
                  }
              },
              "terms_work": {
                  "data": null
              },
              "children": {
                  "data": {
                      "id": 1,
                      "attributes": {
                          "value": "1",
                          "label": "1 дитина",
                          "createdAt": "2022-08-16T08:08:36.827Z",
                          "updatedAt": "2022-12-26T20:55:26.760Z",
                          "publishedAt": "2022-08-16T08:08:38.401Z"
                      }
                  }
              },
              "education": {
                  "data": []
              }
          }
      }
  ],
  "meta": {
      "pagination": {
          "page": 1,
          "pageSize": 25,
          "pageCount": 1,
          "total": 13
      }
  }
}

//get current data
let posts = response.data;

//format data
let postsStructure = posts.map((post) =>{
  return{
    id: post.id,
    ...post.attributes,
  };
});

//filtered post with cost >=1000
let postFiltered = postsStructure.filter((post) => post.cost >=10000);

//sort by title A-Z

postFiltered.sort((a, b) => {
  if (a.title < b.title){
    return -1;
  }
  if (a.title > b.title){
    return 1;
  }
  return 0;
})

//output info html



console.log(postFiltered);


























// const POSTS = [ {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
// {
//   "userId": 1,
//   "id": 2,
//   "title": "qui est esse",
//   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
// },
// {
//   "userId": 1,
//   "id": 3,
//   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//   "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
// },
// {
//   "userId": 1,
//   "id": 4,
//   "title": "eum et est occaecati",
//   "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
// },
// {
//   "userId": 1,
//   "id": 5,
//   "title": "nesciunt quas odio",
//   "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
// },
// {
//   "userId": 1,
//   "id": 6,
//   "title": "dolorem eum magni eos aperiam quia",
//   "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
// },
// {
//   "userId": 1,
//   "id": 7,
//   "title": "magnam facilis autem",
//   "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
// },
// {
//   "userId": 1,
//   "id": 8,
//   "title": "dolorem dolore est ipsam",
//   "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
// },
// {
//   "userId": 1,
//   "id": 9,
//   "title": "nesciunt iure omnis dolorem tempora et accusantium",
//   "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
// },
// {
//   "userId": 1,
//   "id": 10,
//   "title": "optio molestias id quia eum",
//   "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
// },
// {
//   "userId": 2,
//   "id": 11,
//   "title": "et ea vero quia laudantium autem",
//   "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
// },
// {
//   "userId": 2,
//   "id": 12,
//   "title": "in quibusdam tempore odit est dolorem",
//   "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
// },
// {
//   "userId": 2,
//   "id": 13,
//   "title": "dolorum ut in voluptas mollitia et saepe quo animi",
//   "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
// },
// {
//   "userId": 2,
//   "id": 14,
//   "title": "voluptatem eligendi optio",
//   "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
// },
// {
//   "userId": 2,
//   "id": 15,
//   "title": "eveniet quod temporibus",
//   "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
// },
// {
//   "userId": 2,
//   "id": 16,
//   "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
//   "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
// },
// {
//   "userId": 2,
//   "id": 17,
//   "title": "fugit voluptas sed molestias voluptatem provident",
//   "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
// },
// {
//   "userId": 2,
//   "id": 18,
//   "title": "voluptate et itaque vero tempora molestiae",
//   "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
// },
// {
//   "userId": 2,
//   "id": 19,
//   "title": "adipisci placeat illum aut reiciendis qui",
//   "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
// },
// {
//   "userId": 2,
//   "id": 20,
//   "title": "doloribus ad provident suscipit at",
//   "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
// },
// {
//   "userId": 3,
//   "id": 21,
//   "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
//   "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
// },
// {
//   "userId": 3,
//   "id": 22,
//   "title": "dolor sint quo a velit explicabo quia nam",
//   "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
// },
// {
//   "userId": 3,
//   "id": 23,
//   "title": "maxime id vitae nihil numquam",
//   "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
// },
// {
//   "userId": 3,
//   "id": 24,
//   "title": "autem hic labore sunt dolores incidunt",
//   "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
// },
// {
//   "userId": 3,
//   "id": 25,
//   "title": "rem alias distinctio quo quis",
//   "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
// },
// {
//   "userId": 3,
//   "id": 26,
//   "title": "est et quae odit qui non",
//   "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
// },
// {
//   "userId": 3,
//   "id": 27,
//   "title": "quasi id et eos tenetur aut quo autem",
//   "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
// },
// {
//   "userId": 3,
//   "id": 28,
//   "title": "delectus ullam et corporis nulla voluptas sequi",
//   "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
// },
// {
//   "userId": 3,
//   "id": 29,
//   "title": "iusto eius quod necessitatibus culpa ea",
//   "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
// },
// {
//   "userId": 3,
//   "id": 30,
//   "title": "a quo magni similique perferendis",
//   "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
// },
// {
//   "userId": 4,
//   "id": 31,
//   "title": "ullam ut quidem id aut vel consequuntur",
//   "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
// },
// {
//   "userId": 4,
//   "id": 32,
//   "title": "doloremque illum aliquid sunt",
//   "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// },
// {
//   "userId": 4,
//   "id": 33,
//   "title": "qui explicabo molestiae dolorem",
//   "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
// },
// {
//   "userId": 4,
//   "id": 34,
//   "title": "magnam ut rerum iure",
//   "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
// },
// {
//   "userId": 4,
//   "id": 35,
//   "title": "id nihil consequatur molestias animi provident",
//   "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
// },
// {
//   "userId": 4,
//   "id": 36,
//   "title": "fuga nam accusamus voluptas reiciendis itaque",
//   "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
// },
// {
//   "userId": 4,
//   "id": 37,
//   "title": "provident vel ut sit ratione est",
//   "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
// },
// {
//   "userId": 4,
//   "id": 38,
//   "title": "explicabo et eos deleniti nostrum ab id repellendus",
//   "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
// },
// {
//   "userId": 4,
//   "id": 39,
//   "title": "eos dolorem iste accusantium est eaque quam",
//   "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
// },
// {
//   "userId": 4,
//   "id": 40,
//   "title": "enim quo cumque",
//   "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
// },
// {
//   "userId": 5,
//   "id": 41,
//   "title": "non est facere",
//   "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
// },
// {
//   "userId": 5,
//   "id": 42,
//   "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
//   "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
// },
// {
//   "userId": 5,
//   "id": 43,
//   "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
//   "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
// },
// {
//   "userId": 5,
//   "id": 44,
//   "title": "optio dolor molestias sit",
//   "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
// },
// {
//   "userId": 5,
//   "id": 45,
//   "title": "ut numquam possimus omnis eius suscipit laudantium iure",
//   "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
// },
// {
//   "userId": 5,
//   "id": 46,
//   "title": "aut quo modi neque nostrum ducimus",
//   "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
// },
// {
//   "userId": 5,
//   "id": 47,
//   "title": "quibusdam cumque rem aut deserunt",
//   "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
// },
// {
//   "userId": 5,
//   "id": 48,
//   "title": "ut voluptatem illum ea doloribus itaque eos",
//   "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
// },
// {
//   "userId": 5,
//   "id": 49,
//   "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
//   "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
// },
// {
//   "userId": 5,
//   "id": 50,
//   "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
//   "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
// },
// {
//   "userId": 6,
//   "id": 51,
//   "title": "soluta aliquam aperiam consequatur illo quis voluptas",
//   "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
// },
// {
//   "userId": 6,
//   "id": 52,
//   "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
//   "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
// },
// {
//   "userId": 6,
//   "id": 53,
//   "title": "ut quo aut ducimus alias",
//   "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
// },
// {
//   "userId": 6,
//   "id": 54,
//   "title": "sit asperiores ipsam eveniet odio non quia",
//   "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
// },
// {
//   "userId": 6,
//   "id": 55,
//   "title": "sit vel voluptatem et non libero",
//   "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
// },
// {
//   "userId": 6,
//   "id": 56,
//   "title": "qui et at rerum necessitatibus",
//   "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
// },
// {
//   "userId": 6,
//   "id": 57,
//   "title": "sed ab est est",
//   "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
// },
// {
//   "userId": 6,
//   "id": 58,
//   "title": "voluptatum itaque dolores nisi et quasi",
//   "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
// },
// {
//   "userId": 6,
//   "id": 59,
//   "title": "qui commodi dolor at maiores et quis id accusantium",
//   "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
// },
// {
//   "userId": 6,
//   "id": 60,
//   "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
//   "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
// },
// {
//   "userId": 7,
//   "id": 61,
//   "title": "voluptatem doloribus consectetur est ut ducimus",
//   "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
// },
// {
//   "userId": 7,
//   "id": 62,
//   "title": "beatae enim quia vel",
//   "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
// },
// {
//   "userId": 7,
//   "id": 63,
//   "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
//   "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
// },
// {
//   "userId": 7,
//   "id": 64,
//   "title": "et fugit quas eum in in aperiam quod",
//   "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
// },
// {
//   "userId": 7,
//   "id": 65,
//   "title": "consequatur id enim sunt et et",
//   "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
// },
// {
//   "userId": 7,
//   "id": 66,
//   "title": "repudiandae ea animi iusto",
//   "body": "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
// },
// {
//   "userId": 7,
//   "id": 67,
//   "title": "aliquid eos sed fuga est maxime repellendus",
//   "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
// },
// {
//   "userId": 7,
//   "id": 68,
//   "title": "odio quis facere architecto reiciendis optio",
//   "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
// },
// {
//   "userId": 7,
//   "id": 69,
//   "title": "fugiat quod pariatur odit minima",
//   "body": "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
// },
// {
//   "userId": 7,
//   "id": 70,
//   "title": "voluptatem laborum magni",
//   "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
// },
// {
//   "userId": 8,
//   "id": 71,
//   "title": "et iusto veniam et illum aut fuga",
//   "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
// },
// {
//   "userId": 8,
//   "id": 72,
//   "title": "sint hic doloribus consequatur eos non id",
//   "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
// },
// {
//   "userId": 8,
//   "id": 73,
//   "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
//   "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
// },
// {
//   "userId": 8,
//   "id": 74,
//   "title": "enim unde ratione doloribus quas enim ut sit sapiente",
//   "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
// },
// {
//   "userId": 8,
//   "id": 75,
//   "title": "dignissimos eum dolor ut enim et delectus in",
//   "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
// },
// {
//   "userId": 8,
//   "id": 76,
//   "title": "doloremque officiis ad et non perferendis",
//   "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
// },
// {
//   "userId": 8,
//   "id": 77,
//   "title": "necessitatibus quasi exercitationem odio",
//   "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
// },
// {
//   "userId": 8,
//   "id": 78,
//   "title": "quam voluptatibus rerum veritatis",
//   "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
// },
// {
//   "userId": 8,
//   "id": 79,
//   "title": "pariatur consequatur quia magnam autem omnis non amet",
//   "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
// },
// {
//   "userId": 8,
//   "id": 80,
//   "title": "labore in ex et explicabo corporis aut quas",
//   "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
// },
// {
//   "userId": 9,
//   "id": 81,
//   "title": "tempora rem veritatis voluptas quo dolores vero",
//   "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
// },
// {
//   "userId": 9,
//   "id": 82,
//   "title": "laudantium voluptate suscipit sunt enim enim",
//   "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
// },
// {
//   "userId": 9,
//   "id": 83,
//   "title": "odit et voluptates doloribus alias odio et",
//   "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
// },
// {
//   "userId": 9,
//   "id": 84,
//   "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
//   "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
// },
// {
//   "userId": 9,
//   "id": 85,
//   "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
//   "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
// },
// {
//   "userId": 9,
//   "id": 86,
//   "title": "placeat quia et porro iste",
//   "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
// },
// {
//   "userId": 9,
//   "id": 87,
//   "title": "nostrum quis quasi placeat",
//   "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
// },
// {
//   "userId": 9,
//   "id": 88,
//   "title": "sapiente omnis fugit eos",
//   "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
// },
// {
//   "userId": 9,
//   "id": 89,
//   "title": "sint soluta et vel magnam aut ut sed qui",
//   "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
// },
// {
//   "userId": 9,
//   "id": 90,
//   "title": "ad iusto omnis odit dolor voluptatibus",
//   "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
// },
// {
//   "userId": 10,
//   "id": 91,
//   "title": "aut amet sed",
//   "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
// },
// {
//   "userId": 10,
//   "id": 92,
//   "title": "ratione ex tenetur perferendis",
//   "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
// },
// {
//   "userId": 10,
//   "id": 93,
//   "title": "beatae soluta recusandae",
//   "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
// },
// {
//   "userId": 10,
//   "id": 94,
//   "title": "qui qui voluptates illo iste minima",
//   "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// },
// {
//   "userId": 10,
//   "id": 95,
//   "title": "id minus libero illum nam ad officiis",
//   "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
// },
// {
//   "userId": 10,
//   "id": 96,
//   "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//   "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// },
// {
//   "userId": 10,
//   "id": 97,
//   "title": "quas fugiat ut perspiciatis vero provident",
//   "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// },
// {
//   "userId": 10,
//   "id": 98,
//   "title": "laboriosam dolor voluptates",
//   "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
// },
// {
//   "userId": 10,
//   "id": 99,
//   "title": "temporibus sit alias delectus eligendi possimus magni",
//   "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
// },
// {
//   "userId": 10,
//   "id": 100,
//   "title": "at nam consequatur ea labore ea harum",
//   "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
// }];

// // POSTS.sort((a, b) => b.title.length - a.title.length);
// // console.log(POSTS);
// let sortedPosts = POSTS;
// sortedPosts.sort((a, b)=> {
//   return a.title.length - b.title.length;
// });

// sortedPosts.forEach((post) => {
//   const title = post.title;
//   const body = post.body;
//   const userId = post.userId;
// });

// console.log(`Title: ${title} \nBody: ${body} \n User ID: {userId} \n`); /**??? */

// console.log(sortedPosts);



// POSTS.forEach((post) =>{
//   if(post.title[0].toLowerCase() === "e"){
//     filteredPosts.push(post);
//   }
// })




// let filteredPosts = []


// POSTS.forEach((post) =>{
//   if(post.id % 2 === 0 ){
//     filteredPosts.push(post);
//   }
// });

// console.log(filteredPosts);






// const number = [1, 3, 2, 6, 5];
// console.log(number);

// number.sort((a, b) => a - b); /** від меншого до більшого*/
// number.sort((a, b) => b - a); /** від більшого до меншого*/
// console.log(number);

// let sortedNumber = number;


// for (let i = 0; i < number.length - 1; i++){
//   if (number[i] < number[i + 1]){
//     continue;
//   }else{
//     console.log(number[i], number[i + 1]);
//     let less = number[i];
//   number [i] = number[i + 1];
//   number [i + 1] = less;
//   }
// }


// console.log(number);




// let flag = true;
// let count = 0;

// while (flag) {
//   count++;
//   flag = false;
//   for (let i = 0; i > number.length - 1; i++) {
//     if (number[i] < number[i + 1]) {
//       flag = true;
//       let less = number[i];
//       number[i] = number[i + 1];
//       number[i + 1] = less;
//     }
//   }
// }




















// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "pear",
//   "grape",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "kiwi",
//   "mango",
//   "peach",
//   "lemon",
//   "lime",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "apricot",
//   "cherry",
//   "coconut",
//   "fig",
//   "pomegranate",
//   "plum",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
// ];

// let counter = fruits.length;
// let counterloop = 0;
// let flag = true;

// while (flag) {
//   counterloop++;

//   if (counterloop ==10) {
//     continue;
//   } else if (counterloop ==20) {
//     break;
//   }
//   console.log(counterloop);
// }

// for(let i = 0; i < counter;  i++) {
//   console.log(fruits[i]);
// }


// let counter = 0;
// fruits.forEach(function (item){
//   if(item[0] == "a"){
//     console.log(item);
//     counter++;
//   }


//   // console.log(item[0]);
// });



// let counter = 0;
// fruits.forEach(function (item) {
//   if (item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// });

// while (fruits.length > 0) {
//   let item = fruits.pop();
//   if (item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// }

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i][0] == "a") {
//     console.log(fruits[i]);
//     counter++;
//   }
// }

// console.log(counter);


// let familyList = [
//   {
//     name: "John Doe",
//     age: 25,
//   },
//   {
//     name: "Jane Doe",
//     age: 17,
//   },
//   {
//     name: "Jack Doe",
//     age: 18,
//   },
//   {
//     name: "Janifer Doe",
//     age: 14,
//   },
//   {
//     name: "Sem Doe",
//     age: 24,
//   },
// ];

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// familyList.forEach((member)=>{
  
//   if (checkAge(member.age) ) {
//     console.log('adult', member.age);
//   } else {
//     console.log('child', member.age);
//   }
// })


// console.log(checkAge);













// // console.log(familyList[0].name + " " + familyList[0].age);
// familyList.forEach((item)=>{
//   if(item.age >= 21){
//     console.log('You adult!')
//   }
// })


// const usersData = [
//   {
//       name: 'John',
//       age: 25,
//       surname: 'Doe',
//       fatherName: 'Smith'
//   },
//   {
//       name: 'Jane',
//       age: 30,
//       surname: 'Doe',
//       fatherName: 'Sarah'
//   },
//   {
//       name: 'Jack',
//       age: 28,
//       surname: 'Doe',
//       fatherName: 'John'
//   },
//   {
//       name: 'Jill',
//       age: 32,
//       surname: 'Doe',
//       fatherName: 'Monica'
//   }
// ]

// let counter = 0;


// function getInitialsUser(surname, name, fatherName){
//   counter++;
//   if(counter <=3){
//     return surname + " " + name[0] + "." + fatherName[0] + ".";
//   }else{
//     return "Function is called more than 3 times"
//   }
  // const Initials = surName + ' ' + name[0] + "." + fatherName[0] + ".";
  // return Initials;
// }

// function displeyAlertIpnutText(text){
//   alert(text);
// }

// const sayHello = (someText) => {
//   console.log(someText);
// };












// const inputText = prompt("Enter text to displey in alert");
// displeyAlertIpnutText(inputText);


// usersData.forEach((user)=>{
//   const userInitials = getInitialsUser(
//     user.surname,
//     user.name, 
//     user.fatherName
//     );
//   console.log(userInitials + " " + user.age)
// })


// const userInitials = getInitialsUser("Doe", "John", "Smith");
// console.log(userInitials);





 







// const position = fruits.indexOf("cantaloupe");
// console.log(position);
// if(position >= 0){
//   console.log(`I like a ${fruits[position]}`)
// }else{
//   console.log('Error')
// }

// let someVar = "aPPle";
// let someThing = someVar.toLowerCase();

// let target = fruits[8];
// const firstLetter = target[0].toUpperCase();
// let newWord = firstLetter + target.slice(1, target.length);
// console.log(newWord);





// const fruitsName = fruits.indexOf(position)
// console.log(fruitsName)
  






// const secNum = 7;
// const sicret = prompt("Вгадай число")

// if (sicret == secNum ){
//   console.log("Ви вгадали")
// } else if (sicret < secNum){
//   console.log("Введіть більше число")
// } else {
//   console.log("Введіть менше число")
// }

// if (sicret == secNum){
//   console.log("WAW")
//   if(sicret > 7){
   
//   }else{
//     console.log("ВВедіть менше число")
//   }
//   if(sicret < 7){
    
//   }else{
//     console.log("ВВедіть більше число")
//   }
// }
 


// let personalData = {
//   name: "John",
//   surName: "Patric",
//   lastName: "Doe",
//   addsres: {
//     city: "Dro",
//     street: "Rany",
//     number: 123,
//     name: "some",
//     metrics:{
//       water: 4262,
//       gas: 738
//     }
//   },
//   age: [12, 23, 45],
//   isChildren: true
// };

// const a = prompt("Ввудіть число: ")

// if (a == 0 || a > 5){
//   console.log("Success")
// }else{
//   console.log("Fail")
// }

// const age = prompt("Ввеіть ваш вік: ");
// const isActive = false;
// console.log(typeof age);

// let someArr = null;


// if(!someArr) {
  
// }else{
//   console.log("форма не працює")
// }

// if (age >=0){
//   if (age < 18){
//     console.log("Ви не повнолітні")
//   }else if(age>=18 && age <21){
//     console.log("Повнолітні в україні")
//   }else{
//     console.log("Повнолітні всюди")
//   }
//  //some logic 
// }else{
//  console.log("Ви ввели невірне значення");
// }

// personalData.size = size

// console.log(personalData)

// let metrics = personalData.addsres.metrics

// console.log(metrics)
// console.log(personalData.age[1])









// let name = "John";
// let surname = "Doe";
// let middleName = "Patric";

// let arraySome = ['test', 13, true, 13, 12.56];
// const position = arraySome.indexOf(8);


// if(position>=0){
// console.log(`Число ${13} є в масиві!`);
// }else{
//   console.log(`Число ${13} не є в масиві!`)
// }




// Array

// let age = [12, 13, 22, 17];

// const personalData = surname + ' ' + name[0] + '.' + ' ' + middleName[0] + '.'

// console.log("Data: ", personalData)



// console.log("Data: ", name);




