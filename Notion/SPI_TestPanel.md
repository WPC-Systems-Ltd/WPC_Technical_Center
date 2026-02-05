
![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/75ddf6dc-9b25-40ae-b818-a126d7b253cc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEPA65S%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDnHdOj9AunX3ytfWxzThtbrulggfj6a1DclQkljChg4wIhANFcl%2B%2Fz7O1qCFwbPqru%2FO%2BqZmdiMk8ulK2KOeYHiJ%2F2Kv8DCCMQABoMNjM3NDIzMTgzODA1Igy%2BkzdAmP4s9gmay7cq3ANMoHurveJhIhRipGdqyqFWD%2B5EFigCpvYPszi5FSVjYOOLIBxDQQxLCxKUj1YMFusxsn3Wcbo%2BvRhBKTDovwrmYToevIyGVAPojLwUyRK3tBPlDa2fYcL1YXpfH958T%2FvunrbreP2%2FkBbV9rkXEbvYJY%2FnlrPjCE6l3Akbn1d2olx0S8QhwuZ1r1aF7bkTrsNmwRJK7yiBhkcAtvL%2F%2F7DETwRhjXoh9Ow29xbciuAGza%2Bi%2B2f4AG9KLv%2FjtER3iKMU3PrKmCycFj5IHBS6FUqwzHZa9S3dbNX%2FfN2FswXpMgGtF2fs2GMnluYnIgekUkRePP%2BaYdBQXkgqQSIeRj6xO%2FLoLbty3GF436b94HjFb88Sf5oOr7UB2m2JDK9Ng8JK9vkb30uUpF22CrcvC%2FioA9EgL4bnu23up9MzetyZ%2Bz3P7RtCaPlls11JslITog3vkrqXbHlhUsOIqXGeHZOWIdq17rizdhFJPRM%2FBSihegkK0rjSScFMgUFh5RQrtoMe%2BIV6az1O5JklwFTUYWVdtEXeDjrCNT85fK2K6OCaBmA4GBKCN0QO8FQF4H4%2F1lB1vbgKNMYifC67enKslnEl%2Bi4R7tqZmBwIB%2BREcvLkzWMrV418HTvEfFWJnTC1%2BY%2FMBjqkAef56XhP3bTi63ETkEyOCUQA7VorglUQx%2Fdgvi24wv8gV65J015zHQk0Qz7ccPcPQZ5%2FZGGg3nlGPokSeqT7fHS2M8Kk%2BALamZUdjttya%2BEtEmtWAjWIXJoDJUw%2FzkQAqzxd5WbxABWS8nEqm4%2Bksywv9co4ro7Elou1JwF16lwq2%2FyC2xxD1ehcgmnYUmYhbSByZ%2FTl263e7JwoAexbRiOyHrVR&X-Amz-Signature=b159513f7feba8c54decd9ad8a6e11785ae8eabdef15d6b48778abb9fa86709a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Port Setting

    | **Product**     | **Port** |
    | --------------- | -------- |
    | `USB-DAQ-F1-AD` | 2        |
    | `USB-DAQ-F1-CD` | 2        |
    | `USB-DAQ-F1-D`  | 1~2      |
    | `USB-DAQ-F1-RD` | 2        |
    | `USB-DAQ-F1-TD` | 2        |

- SPI Mode

    | Mode | Clock polarity | Clock phase |
    | ---- | -------------- | ----------- |
    | 0    | 0              | 0           |
    | 1    | 0              | 1           |
    | 2    | 1              | 0           |
    | 3    | 1              | 1           |

- Button Description

    | **Button**    | **Description**                        |
    | ------------- | -------------------------------------- |
    | CS Pin        | It depends on the product              |
    | SPI Rate      | The maximum SPI rate is 1M             |
    | Write         | Write SPI data to slave                |
    | Read          | Read SPI data from slave               |
    | Write+Read    | Write and read                         |
    | Bytes to Read | Read how many bytes from the SPI slave |

