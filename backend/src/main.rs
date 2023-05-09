#[macro_use]
extern crate rocket;
mod api;
use api::*;
#[get("/")]
fn hello() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![hello])
}
