module.exports = 
{
    id: 999,
    name: "test strategy 1",
    parameterCount: 2,
    subStrategies: [],
    bind: [
        {
            symbol: "GBPUSD",
            account: 9999
        }

    ],
    buy: [
        {
            key: "testKey1",
            value: 1
        },
        {
            key: "testKey2DESCRIPTIVE",
            value: 1
        }
    ],
    // or
    closeBuy: [
        // {
        //     key: "testKey1",
        //     value: -1
        // },
        // {
        //     key: "testKey3",
        //     value: -1
        // }
    ],
    sell: [
        // {
        //     key: "testKey1",
        //     value: -1
        // },
        // {
        //     key: "testKey2$descriptive",
        //     value: -1
        // }
    ],
    // or
    closeSell: [
        // {
        //     key: "testKey1",
        //     value: 1
        // },
        // {
        //     key: "testKey3",
        //     value: 1
        // }
    ]
}


// http://trade.raitis.co.uk/multiple-factor/GBPUSD-0006_ema/1

// curl -X POST http://localhost:3011/multiple-factor/GBPUSD-999_testKey1/1
// curl -X POST http://localhost:3011/multiple-factor/GBPUSD-999_testKey2$descriptive/1
// curl -X POST http://localhost:3011/multiple-factor/GBPUSD-999_testKey3/1

