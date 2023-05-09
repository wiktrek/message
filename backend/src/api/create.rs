// #[macro_use] extern crate rocket;
use rocket::form::Form;
use rocket::serde::{json::Json, Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize, FromForm)]
pub struct User {
    pub username: String,
    pub password: String,
}

#[post("/test", data = "<form>")]
pub fn test(form: Form<User>) {
    println!("{:?}", form)
}
