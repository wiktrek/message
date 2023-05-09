// #[macro_use] extern crate rocket;
use rocket::form::Form;
use rocket::tokio::sync::broadcast::{channel, error::RecvError, Sender};
use rocket::{Shutdown, State};

struct User {
    pub username: String,
    pub password: String,
}
#[post("/test", data = "<form>")]
fn post(form: Form<User>, queue: &State<Sender<User>>) {
    println!("{:?}", form)
}
    