from zenoh import Zenoh

# Initialize Zenoh
zenoh = Zenoh.open({})

# Publish a simple "Hello, World!" message
zenoh.put("example/hello", "Hello, World!")

print("Hello, World!")
