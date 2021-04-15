module.exports = 
{
    id: 999,
    name: "test strategy 1",
    parameterCount: 3,
    bind: [
        {
            symbol: "testSymbol",
            account: 9999
        }

    ],
    buy: [
        {
            key: "testKey1",
            value: 1
        },
        {
            key: "testKey2",
            value: 1
        }
    ],
    // or
    closeBuy: [
        {
            key: "testKey1",
            value: -1
        },
        {
            key: "testKey3",
            value: -1
        }
    ],
    sell: [
        {
            key: "testKey1",
            value: -1
        },
        {
            key: "testKey2",
            value: -1
        }
    ],
    // or
    closeSell: [
        {
            key: "testKey1",
            value: 1
        },
        {
            key: "testKey3",
            value: 1
        }
    ]
}

// curl -X POST http://localhost:3011/multiple-factor/testSymbol-999_testKey1/1
// curl -X POST http://localhost:3011/multiple-factor/testSymbol-999_testKey2/-1
// curl -X POST http://localhost:3011/multiple-factor/testSymbol-999_testKey3/1

