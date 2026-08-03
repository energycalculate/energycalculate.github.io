//水费数据：新一期直接往数组【最前面】追加一个对象即可
//每期只需填：帐单日期 billingPeriodDate、水费总额 totalBillingPaid、每户人数 peopleCount
const waterBillingPeriods = [
    {
        billingPeriodDate: "2026-08-03",   //示例数据，请按实际帐单修改
        totalBillingPaid: 100,
        households: [
            {
                name: "小韩家",
                peopleCount: 1.5
            },
            {
                name: "羊阿姨",
                peopleCount: 1.5
            },
            {
                name: "成哥家",
                peopleCount: 1
            },
            {
                name: "何哥家",
                peopleCount: 2
            },
        ]
    },
];
