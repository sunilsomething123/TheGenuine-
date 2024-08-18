import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('409b05e9-2159-42ff-b4fc-404500e13690', '1Melba_Johnson88@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv1415', 'cus_1213mnop', 'banned', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('0db6bc05-d3be-4d2e-8093-25084c617ec6', '9Donnell_Reichert@gmail.com', 'David Lee', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv91011', 'cus_1415qrst', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c', '17Makenna30@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv1234', 'cus_1213mnop', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('a8a73440-ba8a-4df9-a824-2aada5c91287', '25Kelly95@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv1213', 'cus_1415qrst', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('02b7d4fc-c486-44ee-a84f-a90f786d3a52', '33Thaddeus_Zieme@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=35', 'inv1415', 'cus_1415qrst', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('1e8a5f39-2375-45cb-acb7-cd76aa246ca1', '41Alexander_Hilll19@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv91011', 'cus_1415qrst', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('1b33ff58-b6a1-43d8-864f-75c9a063a21a', '57Easter_OHara12@hotmail.com', 'David Lee', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv5678', 'cus_5678efgh', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('06da3c12-d4aa-4f8d-9655-555a07768154', '65Keyon16@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv1213', 'cus_91011ijkl', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "stripeCustomerId", "status", "password") VALUES ('47807090-030d-4340-bbb1-844091cecc5d', '73Camille_Marquardt@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv91011', 'cus_91011ijkl', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Tag" ("id", "name") VALUES ('8a025a82-38cb-4040-82a1-b4b339042712', 'Positivity');
INSERT INTO "Tag" ("id", "name") VALUES ('cedcc401-c39a-4124-b8a3-bc11996f2b2f', 'Inspiration');
INSERT INTO "Tag" ("id", "name") VALUES ('505249ee-435b-4610-b1e9-47ab59f0ac74', 'Inspiration');
INSERT INTO "Tag" ("id", "name") VALUES ('867fd5af-47de-495b-838c-b303a219cafd', 'Motivation');
INSERT INTO "Tag" ("id", "name") VALUES ('502cb554-0ec1-4999-a3d7-8abf2ba315a7', 'Motivation');
INSERT INTO "Tag" ("id", "name") VALUES ('fa150315-b507-4668-95ad-31d3a7c43393', 'Motivation');
INSERT INTO "Tag" ("id", "name") VALUES ('1aaa7817-e8ae-4820-835d-0d6709841f91', 'Wisdom');
INSERT INTO "Tag" ("id", "name") VALUES ('d6fa7f28-8f75-4118-9040-22fefcaebf2b', 'Inspiration');
INSERT INTO "Tag" ("id", "name") VALUES ('b0cb71e8-204e-4690-8542-d330e01dfa97', 'Motivation');
INSERT INTO "Tag" ("id", "name") VALUES ('db9fd12b-140e-4a80-8295-8a3df76f1938', 'Success');

INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('c5e0f99a-3935-457b-b2ee-331ff66bcb24', 'Believe you can and you&apos;re halfway there.', 'Albert Schweitzer', 'Inspiration', '2025-04-24T10:36:06.241Z', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('338bdfa7-f42c-457b-b4a9-ce26964f8d35', 'Act as if what you do makes a difference. It does.', 'Theodore Roosevelt', 'Belief', '2024-04-23T09:10:06.439Z', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('5958624a-7cc0-4fe0-b4fe-26c2b74070eb', 'The only limit to our realization of tomorrow is our doubts of today.', 'Franklin D. Roosevelt', 'Motivation', '2024-12-28T02:51:02.722Z', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('1e5dce4b-49fc-4022-84f5-e80ffa8c4f39', 'Believe you can and youre halfway there.', 'Franklin D. Roosevelt', 'Belief', '2025-01-06T14:03:35.531Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('61a8a7ca-d515-4462-ac57-5da525399be2', 'The only limit to our realization of tomorrow is our doubts of today.', 'Franklin D. Roosevelt', 'Success', '2025-05-25T17:47:26.853Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('a6291661-e7b0-4a4d-b269-7cc6b31962f7', 'The best way to predict the future is to create it.', 'William James', 'Success', '2024-11-10T03:49:55.229Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('618d26a3-0e66-4e35-a5fa-8d9ecb704600', 'The only limit to our realization of tomorrow is our doubts of today.', 'William James', 'Inspiration', '2024-05-08T20:53:58.237Z', 'a8a73440-ba8a-4df9-a824-2aada5c91287');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('5a9e1854-06f5-4ad4-8505-0a39d80ef997', 'The best way to predict the future is to create it.', 'Albert Schweitzer', 'Belief', '2024-08-14T14:48:00.090Z', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('d54e7aad-277d-43ae-aa92-d971f82d2a93', 'The best way to predict the future is to create it.', 'Franklin D. Roosevelt', 'Success', '2024-06-16T09:33:02.132Z', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Quote" ("id", "content", "author", "category", "datePosted", "userId") VALUES ('18960a25-b707-4a80-a884-052a5a55895a', 'The best way to predict the future is to create it.', 'William James', 'Inspiration', '2025-02-26T06:07:59.399Z', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');

INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('26ed4b7e-3f43-4726-a6fa-17d77af95eeb', 'https://i.imgur.com/YfJQV5z.png?id=151', 'Sunset Over Mountains', 'A picturesque snowy landscape with a clear blue sky.', '2025-07-29T18:17:02.005Z', 'a8a73440-ba8a-4df9-a824-2aada5c91287');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('4c2a98ee-dbaf-4abf-9c01-35713e60c771', 'https://i.imgur.com/YfJQV5z.png?id=156', 'Calm Beach', 'A picturesque snowy landscape with a clear blue sky.', '2024-01-11T18:16:21.720Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('c871298d-62df-4b58-9170-70bb97c062eb', 'https://i.imgur.com/YfJQV5z.png?id=161', 'Forest Pathway', 'A peaceful pathway through a dense forest.', '2024-09-01T03:32:53.296Z', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('dc94e62b-abee-4ec1-9da3-566d1c0ea0b2', 'https://i.imgur.com/YfJQV5z.png?id=166', 'Calm Beach', 'A peaceful pathway through a dense forest.', '2023-09-21T22:07:57.982Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('dc5ff921-66f6-4e8e-8b47-07bb4ce36437', 'https://i.imgur.com/YfJQV5z.png?id=171', 'Calm Beach', 'A peaceful pathway through a dense forest.', '2025-03-16T06:06:52.521Z', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('a827403a-d975-4434-a37c-b3843b080d36', 'https://i.imgur.com/YfJQV5z.png?id=176', 'Sunset Over Mountains', 'A picturesque snowy landscape with a clear blue sky.', '2025-04-15T02:58:52.308Z', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('92cdfbf8-fc0b-4d4e-931a-58e63fd37526', 'https://i.imgur.com/YfJQV5z.png?id=181', 'Forest Pathway', 'A picturesque snowy landscape with a clear blue sky.', '2024-11-10T05:53:26.519Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('a6b68072-9599-4980-ab4a-c338a96aef20', 'https://i.imgur.com/YfJQV5z.png?id=186', 'Forest Pathway', 'A picturesque snowy landscape with a clear blue sky.', '2024-07-23T14:08:16.664Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('00431cb1-372b-4827-9909-a7bf9d5a73f9', 'https://i.imgur.com/YfJQV5z.png?id=191', 'Snowy Landscape', 'A serene beach with clear blue waters and white sand.', '2023-08-25T16:38:14.500Z', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Image" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('1c6fcada-f654-4f49-8c86-367dce9cf1a7', 'https://i.imgur.com/YfJQV5z.png?id=196', 'City Skyline at Night', 'A serene beach with clear blue waters and white sand.', '2024-10-07T09:07:59.579Z', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');

INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('90e0a396-0b14-4669-af6d-3e2e60ca78b2', 'https://i.imgur.com/YfJQV5z.png?id=201', 'Overcoming Challenges', 'A guide to the journey of success.', '2024-09-20T16:47:58.706Z', '47807090-030d-4340-bbb1-844091cecc5d');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('d09094af-bbef-4c88-82db-0df04fc4f42c', 'https://i.imgur.com/YfJQV5z.png?id=206', 'The Journey to Success', 'Steps to achieving your dreams.', '2025-02-20T15:46:27.211Z', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('760bb27f-77af-4939-a3c7-b1f6de18cc25', 'https://i.imgur.com/YfJQV5z.png?id=211', 'The Journey to Success', 'Find inspiration in the beauty of nature.', '2024-04-09T23:19:24.290Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('96d36994-d7ab-403e-a749-f062868173de', 'https://i.imgur.com/YfJQV5z.png?id=216', 'The Journey to Success', 'A guide to the journey of success.', '2024-10-17T16:46:14.975Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('9a4f393e-cb9c-40e0-8fef-5de2c0994160', 'https://i.imgur.com/YfJQV5z.png?id=221', 'Inspiration from Nature', 'Steps to achieving your dreams.', '2024-01-08T22:53:16.651Z', '47807090-030d-4340-bbb1-844091cecc5d');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('e865c10a-2613-4655-b7df-8aaeb5c1ea7b', 'https://i.imgur.com/YfJQV5z.png?id=226', 'The Power of Positivity', 'Find inspiration in the beauty of nature.', '2025-04-22T06:54:48.286Z', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('9cef34f6-9b38-453d-962e-b8415ad0c01d', 'https://i.imgur.com/YfJQV5z.png?id=231', 'The Power of Positivity', 'Steps to achieving your dreams.', '2025-06-11T01:29:52.940Z', '02b7d4fc-c486-44ee-a84f-a90f786d3a52');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('5b9cefa8-702f-45af-8352-e22636e088f6', 'https://i.imgur.com/YfJQV5z.png?id=236', 'The Power of Positivity', 'Steps to achieving your dreams.', '2024-06-25T12:13:55.534Z', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('5631ec1b-6976-406c-a2e1-f9bc1e441ce8', 'https://i.imgur.com/YfJQV5z.png?id=241', 'Overcoming Challenges', 'A guide to the journey of success.', '2024-02-02T13:10:09.882Z', '1e8a5f39-2375-45cb-acb7-cd76aa246ca1');
INSERT INTO "Video" ("id", "url", "title", "description", "datePosted", "userId") VALUES ('95868de7-c11d-49f0-a469-c497e85693d9', 'https://i.imgur.com/YfJQV5z.png?id=246', 'The Power of Positivity', 'Find inspiration in the beauty of nature.', '2023-12-20T05:39:18.061Z', 'a8a73440-ba8a-4df9-a824-2aada5c91287');

INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('7a276bbb-d6a1-4835-93d2-86d6085ff07c', '5a9e1854-06f5-4ad4-8505-0a39d80ef997', 'db9fd12b-140e-4a80-8295-8a3df76f1938');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('1f8e6cf9-a3f5-4f12-9c2d-62dbbe8562b1', 'c5e0f99a-3935-457b-b2ee-331ff66bcb24', '1aaa7817-e8ae-4820-835d-0d6709841f91');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('da5c84f1-560d-412e-8810-b164b44c3e1e', '338bdfa7-f42c-457b-b4a9-ce26964f8d35', '8a025a82-38cb-4040-82a1-b4b339042712');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('a9120397-f106-4bb0-8b74-30870f1c1a11', '1e5dce4b-49fc-4022-84f5-e80ffa8c4f39', 'cedcc401-c39a-4124-b8a3-bc11996f2b2f');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('ffb94f71-0bf3-48fa-ae37-ed12c033e530', 'a6291661-e7b0-4a4d-b269-7cc6b31962f7', 'd6fa7f28-8f75-4118-9040-22fefcaebf2b');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('804bf552-c607-4256-98a9-d01c2bd4ca5e', 'd54e7aad-277d-43ae-aa92-d971f82d2a93', 'd6fa7f28-8f75-4118-9040-22fefcaebf2b');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('cad43ebc-7e97-4a36-a651-e5ac42f8a6aa', '5958624a-7cc0-4fe0-b4fe-26c2b74070eb', '1aaa7817-e8ae-4820-835d-0d6709841f91');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('43bedab1-dd54-4af3-90f6-8ba3f318ddd3', '18960a25-b707-4a80-a884-052a5a55895a', '8a025a82-38cb-4040-82a1-b4b339042712');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('d50d326d-190e-4e96-9e70-998321db8e3f', '338bdfa7-f42c-457b-b4a9-ce26964f8d35', 'd6fa7f28-8f75-4118-9040-22fefcaebf2b');
INSERT INTO "ContentTag" ("id", "contentId", "tagId") VALUES ('464df600-b499-4430-80c2-1652723ef0cf', '61a8a7ca-d515-4462-ac57-5da525399be2', '1aaa7817-e8ae-4820-835d-0d6709841f91');

INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('f76792c3-434d-492f-b276-353cb31e42a8', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '06da3c12-d4aa-4f8d-9655-555a07768154');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('670d19b6-b72a-4cea-aafd-3eb1edcaa644', 'a8a73440-ba8a-4df9-a824-2aada5c91287', 'a8a73440-ba8a-4df9-a824-2aada5c91287');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('c17061e7-f226-4089-bdce-34969a4a8a7a', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1e8a5f39-2375-45cb-acb7-cd76aa246ca1');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('ca8c8393-45e8-44c4-afa8-17a0d5af727d', '1b33ff58-b6a1-43d8-864f-75c9a063a21a', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('ec06d249-8e06-425c-ab0b-e3e75b3560f4', '409b05e9-2159-42ff-b4fc-404500e13690', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('14d90a9e-f335-4653-9dfc-f19b67c47385', '06da3c12-d4aa-4f8d-9655-555a07768154', '1e8a5f39-2375-45cb-acb7-cd76aa246ca1');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('e1f3a955-a1e2-4336-9bed-077122741e3a', '1b33ff58-b6a1-43d8-864f-75c9a063a21a', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('7fb6f641-97ff-46dd-ab18-2c7df27ebe89', '02b7d4fc-c486-44ee-a84f-a90f786d3a52', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('e7268ad9-d7fe-4783-980a-6c2ffd448fb5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Follow" ("id", "followerId", "followeeId") VALUES ('ec20ac7e-d6e4-422e-8d09-4ca9d9e0f71d', '0db6bc05-d3be-4d2e-8093-25084c617ec6', '0db6bc05-d3be-4d2e-8093-25084c617ec6');

INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('dc2aa5ec-9ad4-46bb-bf8f-dbe0b8d80e3b', '2025-07-30T01:39:54.893Z', 'Success is not the key to happiness. Happiness is the key to success.  Albert Schweitzer', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('e9eead57-a18d-4e37-b746-5e3760c4c21d', '2023-09-22T04:28:45.849Z', 'The only way to do great work is to love what you do.  Steve Jobs', '02b7d4fc-c486-44ee-a84f-a90f786d3a52');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('fe704505-387c-4d5d-800c-a17510409562', '2025-02-09T19:56:12.945Z', 'Success is not the key to happiness. Happiness is the key to success.  Albert Schweitzer', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('d8381a04-5b09-4bf4-985c-504a0d91e075', '2024-06-29T14:36:16.749Z', 'The only way to do great work is to love what you do.  Steve Jobs', '409b05e9-2159-42ff-b4fc-404500e13690');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('bd712a2e-cba9-4e29-86e1-961aeb4b7013', '2023-11-26T13:42:10.245Z', 'Believe you can and youre halfway there.  Theodore Roosevelt', '1e8a5f39-2375-45cb-acb7-cd76aa246ca1');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('4f5aa850-dbc7-4bf4-ab0c-c5a363847912', '2024-11-22T06:11:19.781Z', 'Success is not the key to happiness. Happiness is the key to success.  Albert Schweitzer', '80a5ec0f-c3ac-4f79-8f5b-0d917bfb537c');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('df3424c5-a4b3-4bd3-ae0c-9f175a3666de', '2024-03-12T06:03:44.281Z', 'The future belongs to those who believe in the beauty of their dreams.  Eleanor Roosevelt', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('a0731ea9-18a8-4608-885a-524ac3e8d824', '2025-05-16T05:28:43.948Z', 'Success is not the key to happiness. Happiness is the key to success.  Albert Schweitzer', '409b05e9-2159-42ff-b4fc-404500e13690');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('f1c39452-3e91-426a-b5b6-435f72a0e25d', '2025-01-10T06:13:56.319Z', 'Believe you can and youre halfway there.  Theodore Roosevelt', '0db6bc05-d3be-4d2e-8093-25084c617ec6');
INSERT INTO "Note" ("id", "date", "content", "userId") VALUES ('66bf7de4-0dc2-4b1f-ab54-c26232ae2420', '2024-05-16T09:05:49.363Z', 'Believe you can and youre halfway there.  Theodore Roosevelt', '1b33ff58-b6a1-43d8-864f-75c9a063a21a');

INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('05628d85-de29-4851-b7eb-4256000915ab', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '61a8a7ca-d515-4462-ac57-5da525399be2');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('35604f02-4bb3-43ea-be8f-77df59ebbd5c', '06da3c12-d4aa-4f8d-9655-555a07768154', '5958624a-7cc0-4fe0-b4fe-26c2b74070eb');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('3437581e-a340-4baf-9d9a-7a0e8bbcc666', 'a8a73440-ba8a-4df9-a824-2aada5c91287', '1e5dce4b-49fc-4022-84f5-e80ffa8c4f39');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('0c88d5d1-e8e2-45cc-8d0b-68af01365fc9', '1e8a5f39-2375-45cb-acb7-cd76aa246ca1', '5a9e1854-06f5-4ad4-8505-0a39d80ef997');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('7c73d817-0fb6-466d-a421-48af99829f25', 'a8a73440-ba8a-4df9-a824-2aada5c91287', 'a6291661-e7b0-4a4d-b269-7cc6b31962f7');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('681118cf-274e-4333-8b45-642239b9d02f', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '61a8a7ca-d515-4462-ac57-5da525399be2');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('4a52edd2-c2cd-4ae5-ac9e-e9b9e0140e9c', '06da3c12-d4aa-4f8d-9655-555a07768154', '5a9e1854-06f5-4ad4-8505-0a39d80ef997');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('3d5c3583-bde7-474f-a614-81b132a26a6d', 'a8a73440-ba8a-4df9-a824-2aada5c91287', 'c5e0f99a-3935-457b-b2ee-331ff66bcb24');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('5f7833e6-82b5-4d7c-a494-9ba8347cb94c', '06da3c12-d4aa-4f8d-9655-555a07768154', '338bdfa7-f42c-457b-b4a9-ce26964f8d35');
INSERT INTO "SavedContent" ("id", "userId", "contentId") VALUES ('3c688c01-5f28-4a0f-9d24-3e965ba4c70e', '02b7d4fc-c486-44ee-a84f-a90f786d3a52', '61a8a7ca-d515-4462-ac57-5da525399be2');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
