//读表数据
const billingPeriods = [
    {
        billingPeriodDate: "2025-09-08",
        totalBillingPaid: 1023.70,
        tier: 3,
        meters: [
            {meterId: "1号表", currentReading: 8372, peopleCount: 1},
            {meterId: "2号表", currentReading: 10410, peopleCount: 2},
            {meterId: "3号表", currentReading: 8407, peopleCount: 1},
            {meterId: "4号表", currentReading: 7092, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-08-13",
        totalBillingPaid: 683.10,
        tier: 1,
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
        tier: 1,
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
        tier: 1,
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
        tier: 1,
        meters: [
            {meterId: "1号表", currentReading: 7918.1, peopleCount: 1},
            {meterId: "2号表", currentReading: 9930.3, peopleCount: 3},
            {meterId: "3号表", currentReading: 7796.9, peopleCount: 1},
            {meterId: "4号表", currentReading: 5174.9, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-03-30",
        totalBillingPaid: 295.8,
        tier: 1,
        meters: [
            {meterId: "1号表", currentReading: 7887.0, peopleCount: 1},
            {meterId: "2号表", currentReading: 9895.0, peopleCount: 3},
            {meterId: "3号表", currentReading: 7739.9, peopleCount: 1},
            {meterId: "4号表", currentReading: 5128.2, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-02-08",
        totalBillingPaid: 444.5,
        tier: 1,
        meters: [
            {meterId: "1号表", currentReading: 7794.6, peopleCount: 1},
            {meterId: "2号表", currentReading: 9803.2, peopleCount: 3},
            {meterId: "3号表", currentReading: 7581.2, peopleCount: 1},
            {meterId: "4号表", currentReading: 4954.9, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2025-01-14",
        totalBillingPaid: 672.2,
        tier: 1,
        meters: [
            {meterId: "1号表", currentReading: 7759.2, peopleCount: 1},
            {meterId: "2号表", currentReading: 9773.2, peopleCount: 3},
            {meterId: "3号表", currentReading: 7466.4, peopleCount: 1},
            {meterId: "4号表", currentReading: 4806.1, peopleCount: 1},
        ]
    },
    {
        billingPeriodDate: "2024-12-17",
        totalBillingPaid: 380.8,
        tier: 1,
        meters: [
            {meterId: "1号表", currentReading: 7706, peopleCount: 1},
            {meterId: "2号表", currentReading: 9717.5, peopleCount: 3},
            {meterId: "3号表", currentReading: 7281, peopleCount: 1},
            {meterId: "4号表", currentReading: 4331, peopleCount: 1},
        ]
    }
];

const meterAliasMap = {
    "1号表": "小韩家",
    "2号表": "羊阿姨",
    "3号表": "成哥家",
    "4号表": "榴莲猫主人"
};