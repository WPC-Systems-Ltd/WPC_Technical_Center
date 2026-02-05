
![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/4315c151-8594-4e81-86c1-7fb02b94e4b4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEGID6YG%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T021925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC2%2BdgF2uIqgPfUCATpqkCu%2Brp8b1i%2B%2FofTDqznJXCwKAIhAK4eOGtOC0TsSYBwa3ovex%2F5xC%2BryYRgrKtJC060psBKKv8DCCMQABoMNjM3NDIzMTgzODA1IgwrQ3OsLy6gOsu3I4Aq3APHSmXY6Osd0YTTSUk02Fa6lrdWJx%2Br6oJdnWHluRBhlZYwjA72DTe5ZNyzBqLwL4CyomhO35y5yMScZXEbEBV%2F8BvUX8LHbU0y5azcDpEf7XwFTsrm7ge5LE220W70C7OVYiz4NbaafsLRot2F%2B5KbpAdlYc6QJTvn%2F%2FV5gSzBfc5h%2Bg7ziwif8RTNnOHEM55FoOSy8ttqbY4pw%2BvbkPNaeORgzOU%2BZ7c38WUOTdiGxt%2BGIVlOGogUlL5iWir1CNv8HAEvgK1Frz7iZzhf5PwCNWSlBfEHpQ9fpiD7e6AbLg0JTm3hHxKHl30LrmLFZGjGLNNd9KhfMUvBIR8XDdNbmHrdnG0123p6WB0sCo3JlBGHQiiVWslkXIQWdHtEPVBSl4Fd%2FbheUtr8B0joo5nOBBsKHbRQSfJrCWJtjzIwqW%2FwJbbEn4FkSMGBc2A2J4bF9I0mnJBu4TZsS63ZfHIzCgOjtev9PiLgtlL2oyhDWcjMhU0f9E3JWYGLzSqlJdMLmxdZcVnnPINXlTF8h811bqeZozPnPyAdmWncV66psVx7xYS4bmbZF2gYPLfziXli3%2F2hQyX7vZSW700Uq9dqzYN8GbeZFO8wSQgIc60q0tmuPLpY62p25288UjDx%2BI%2FMBjqkAZUazNmbLB5DpsliT%2BPbx6K1MHIrqbrPi9ZbvQL5nukBmz76l0HqsA4pGYG7nbrczHKz4qNRanGy7KQYvR18v%2F4eo0JDw6xFdeaa4Lk5b493X5hf8QF5pOU29AQ1w8Or6qzkwLZ3uhXeG7DckOdsCa2QXjysZXcVXK7qVQfdnow4hut1PMqxGwGG8Js4OFrSZKErc4bkhUwmQMSMKhhMCFwAsx%2FF&X-Amz-Signature=ceddc7fe9e3b47f592fe6aca783b092b14c5df6713448c316f48b07ab4239125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Port Setting

    | **Product**      | **Port** |
    | ---------------- | -------- |
    | `USB-DAQ-F1-AD`  | 1~2      |
    | `USB-DAQ-F1-AOD` | 1~2      |
    | `USB-DAQ-F1-CD`  | 1~2      |
    | `USB-DAQ-F1-D`   | 1~2      |
    | `USB-DAQ-F1-RD`  | 1~2      |
    | `USB-DAQ-F1-TD`  | 1~2      |

- I2C Clock Rate
    1. Standard (100 kbit/s)
    2. Fast  (400 kbit/s)
    3. Fast Plus (1 Mbit/s)
    4. High Speed (3.4 Mbit/s)
- Button Description

    | **Button**    | **Description**                        |
    | ------------- | -------------------------------------- |
    | Write         | Write I2C data to slave                |
    | Read          | Read I2C data from slave               |
    | Query         | Write and read                         |
    | Write Address | Write to the I2C slave address         |
    | Read Address  | Read from the I2C slave address        |
    | Read Delay    | Tme (ms)                               |
    | Bytes to Read | Read how many bytes from the I2C slave |

