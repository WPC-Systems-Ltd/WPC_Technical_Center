
![%E5%9C%96%E7%89%87.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/ea597527-0ccb-4fbf-a8b5-90ebe954eba9/%E5%9C%96%E7%89%87.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUFIIMH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T021416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDgFM8%2FGU4Af5WxsbQ1vrJX65AQY%2FXcL9kivbRav8ZO5QIhAJU5nGckFra%2FzSvV80wws0oGmYlbtx7YFmCedtIfWyI9Kv8DCCMQABoMNjM3NDIzMTgzODA1Igwfz4zuI8c2eLwcyF8q3AMjsVsqNnDN%2BtI7tfM%2Fjdg%2BJ86mauidak%2FSXd6SSa9c4IFWba2traOuq6wK1KbSJkqGwB6LfMyteNdY932w1AQ2i7ime%2BmzoXQXkI%2FRLWHD8khnD2GIiYujdFoUkh%2BFduT1ZusIGoWUBGmrJDqTMwUFU6%2FJFFF8kC9yHTaEoutc%2FHB%2F9DAY7IPbe62YtJl86XetXThBhpVqaXss5q9V4vmuEa4RMTkCc%2BnhyLMyeIQGk0w%2Bb0JKx8Ga52s77%2BKqf8B2Z2esGWqrgI4IlV0CF3FuiLVHAeA6Cm6g%2BZFkDltz4fU2osktRyXP4ZG0gozZMYYAUXVTkFh9zClAh%2ByHCCcZBw5CvA4hBaOMSFBsCONsbsuiIBmABACdrPkYtIvTjM%2FU2EfGeK%2BALDtSu4K78bitQVrmfuJL3JJvckPJ0Hza8mitI7HElobiDiXUyFvROClMxkQBj%2FW6%2BvPolYR4eEdbMQy8iss2j1p51ELqbdtMMo%2BqoKQeGX0k3qJe1N5DG0GayHbZ4beJW%2FP%2FeyVTjBXpVKLH9EesT4cBuKcT97rBt5KC13ali3jQ7Fne9BFPTqRhsuPb4YXCkrWNwru1gY1t0YsEftSyYS2NwbfsXkyIpsevSujMnA8y2JW9WDDf%2BI%2FMBjqkASI6EsI0WyYKuMLfeSUssGUJuC%2BSEKVgPjbjHCP6P1pxDlK5pKKCPO3f0zpZ2VfUB7rZmyznoG%2BvohbvNNKIN3aVyr5yR8jhjZmHvfnm%2BrkLThOihYyakqWvImznF2yvi%2BEwLNkcrLWC4tRsLj%2FmUtVG8mgR58L27CbjDGRqE%2B2maAYTWR1m2loRrzHfct75VvrTUpiE5YgH%2BXxmYB3Cwq0MxmYJ&X-Amz-Signature=06868683b501c3f2c40c76bb68b8c4f786b9b0d8982c359c11afb8593cf91c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Port

    | **Product Name** | **Port** | **Measurement**           |
    | ---------------- | -------- | ------------------------- |
    | `Ethan-A`        | 0        | Voltage                   |
    | `Ethan-I`        | 0        | `Current`                 |
    | `Ethan-IA`       | 0, 1     | 0 :`Current`
    1 :`Voltage` |
    | `USB-DAQ-F1-AD`  | 0        | Voltage                   |
    | `USB-DAQ-F1-AOD` | 0        | Voltage                   |
    | `Wifi-DAQ-E3-A`  | 0        | Voltage                   |
    | `Wifi-DAQ-E3-AH` | 0        | Voltage                   |
    | `Wifi-DAQ-F4-A`  | 0        | Voltage                   |

- Channel Select

    | **Channel**  | **Description**  |
    | ------------ | ---------------- |
    | port0/ai 0   | Open channel 0   |
    | port0/ai 0:1 | Open channel 0~1 |
    | port0/ai 0:2 | Open channel 0~2 |
    | port0/ai 0:3 | Open channel 0~3 |
    | port0/ai 0:4 | Open channel 0~4 |
    | port0/ai 0:5 | Open channel 0~5 |
    | port0/ai 0:6 | Open channel 0~6 |
    | port0/ai 0:7 | Open channel 0~7 |

- Acquisition Mode Selection

    | **Mode**    | **Description**                         |
    | ----------- | --------------------------------------- |
    | On Demand   | Data collected as needed                |
    | N Sample    | Fixed number of data instances acquired |
    | Continuous  | Ongoing, uninterrupted data collection  |

- Sampling Rate

    | **Product Name** | **Sampling Rate**                                                              |
    | ---------------- | ------------------------------------------------------------------------------ |
    | `Ethan-A`        | 8ch simultaneously with 20K                                                    |
    | `Ethan-I`        | Only support `on demand`mode                                                   |
    | `Ethan-IA`       | Only support `on demand`mode                                                   |
    | `USB-DAQ-F1-AD`  | It depends on the channel
    please see [here](/2fff62b93efa41d595607d73765621c4) |
    | `USB-DAQ-F1-AOD` | It depends on the channel
    please see [here](/2fff62b93efa41d595607d73765621c4) |
    | `Wifi-DAQ-E3-A`  | 8ch simultaneously with 10K                                                    |
    | `Wifi-DAQ-E3-AH` | 8ch simultaneously with 10K                                                    |
    | `Wifi-DAQ-F4-A`  | 8ch simultaneously with 10K                                                    |

- Number of Sample
- Trigger

    | None         |   |
    | ------------ | - |
    | RTC-Absolute |   |
    | RTC-Relative |   |

- Timeout (ms)
- Ignore Timeout Error
- Button Description

    | **Button** |                         |
    | ---------- | ----------------------- |
    | Start      | Start reading AI value  |
    | Stop       | Stop reading AI value   |

