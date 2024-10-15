#![no_std]

use soroban_sdk::{contractimpl, Env};

pub struct HelloContract;

#[contractimpl]
impl HelloContract {
    pub fn hello(env: Env) -> &'static str {
        "Hello, World!"
    }
}
