# CRUD_Node_Express_SQL
Crud app using Node js, Express and SQL


### Steps To run this Project 
### 1) Clone Repo
### 2) Install Node modules
### 3) Configure lib/db.js file according to your sql user and passwors
### 4) Create database with name 'node_js_crud'
### 5) Run the following script in sql: 

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
  
### 6) Run the project by typing node index.js 
