//读表数据
const billingPeriods = [
    {
        billingPeriodDate: "2025-08-13",
        totalBillingPaid: 683.10,
        meters: [
            {meterId: "1号表", currentReading: 8269, peopleCount: 1},
            {meterId: "2号表", currentReading: 10240, peopleCount: 2},
            {meterId: "3号表", currentReading: 8258, peopleCount: 1},
            {meterId: "4号表", currentReading: 6586, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-07-18",
        totalBillingPaid: 453,
        meters: [
            {meterId: "1号表", currentReading: 8148.6, peopleCount: 1},
            {meterId: "2号表", currentReading: 10127.6, peopleCount: 2},
            {meterId: "3号表", currentReading: 8101.7, peopleCount: 1},
            {meterId: "4号表", currentReading: 6070.6, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-06-05",
        totalBillingPaid: 499,
        meters: [
            {meterId: "1号表", currentReading: 7995.4, peopleCount: 1},
            {meterId: "2号表", currentReading: 10008.2, peopleCount: 3},
            {meterId: "3号表", currentReading: 7904.9, peopleCount: 1},
            {meterId: "4号表", currentReading: 5337.5, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-04-24",
        totalBillingPaid: 264.4,
        meters: [
            {meterId: "1号表", currentReading: 7918.1, peopleCount: 1},
            {meterId: "2号表", currentReading: 9930.3, peopleCount: 3},
            {meterId: "3号表", currentReading: 7796.9, peopleCount: 1},
            {meterId: "4号表", currentReading: 5174.9, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-03-06",
        totalBillingPaid: 295.8,
        meters: [
            {meterId: "1号表", currentReading: 7887.0, peopleCount: 1},
            {meterId: "2号表", currentReading: 9895.0, peopleCount: 2},
            {meterId: "3号表", currentReading: 7739.9, peopleCount: 1},
            {meterId: "4号表", currentReading: 5128.2, peopleCount: 1},
        ]
    }
];

const meterAliasMap = {
    "1号表": "小韩家",
    "2号表": "羊阿姨",
    "3号表": "成哥家",
    "4号表": "榴莲猫主人"
};