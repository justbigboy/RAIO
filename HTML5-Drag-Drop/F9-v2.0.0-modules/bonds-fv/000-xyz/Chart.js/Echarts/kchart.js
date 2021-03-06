// stock & k line
function renderKData(B, A) {
    var C = B;
    data = splitData(C);
    A.setOption({
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                crossStyle: {
                    type: "solid"
                }
            },
            backgroundColor: "rgba(245, 245, 245, 0.8)",
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            textStyle: {
                color: "#000"
            },
            position: function (G, I, D, H, F) {
                var E = {
                    top: 80
                };
                E[
                    ["left", "right"][+ (G[0] < F.viewSize[0] / 2)]
                ] = 57;
                return E;
            },
            extraCssText: "minWidth: 120px"
        },
        axisPointer: {
            link: {
                xAxisIndex: "all"
            },
            label: {
                backgroundColor: "#777"
            }
        },
        legend: {
            data: ["K线", "MA5", "MA10", "MA20", "MA30"]
        },
        grid: [
            {
                height: "50%"
            }, {
                top: "71%",
                height: "15%"
            }
        ],
        xAxis: [
            {
                type: "category",
                data: data.times,
                boundaryGap: [
                    0, 0
                ],
                axisLine: {
                    onZero: false
                },
                splitLine: {
                    show: true
                },
                axisLabel: {
                    interval: 15,
                    showMinLabel: false,
                    showMaxLabel: true
                }
            }, {
                type: "category",
                gridIndex: 1,
                data: data.times,
                axisPointer: {
                    label: {
                        show: true,
                        formatter: function (E) {
                            var D = (E.seriesData[0] || {}).value;
                            return echarts
                                .format
                                .addCommas(D);
                        }
                    }
                },
                axisLabel: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                scale: true,
                axisLabel: {
                    formatter: function (D) {
                        return D.toFixed(2);
                    }
                }
            }, {
                gridIndex: 1,
                splitNumber: 3,
                axisLine: {
                    onZero: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: function (D) {
                        return D / 10000 + "万";
                    }
                }
            }
        ],
        dataZoom: [
            {
                type: "inside",
                xAxisIndex: [
                    0, 0
                ],
                start: 20,
                end: 100
            }, {
                show: true,
                xAxisIndex: [
                    0, 1
                ],
                type: "slider",
                left: "15%",
                right: "15%",
                top: "90%",
                start: 20,
                end: 100
            }
        ],
        series: [
            {
                name: "K线",
                type: "candlestick",
                data: data.datas,
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: "#ef232a",
                        color0: "#14b143",
                        borderColor: "#ef232a",
                        borderColor0: "#14b143"
                    }
                }
            }, {
                name: "MA5",
                type: "line",
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            }, {
                name: "MA10",
                type: "line",
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            }, {
                name: "MA20",
                type: "line",
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            }, {
                name: "MA30",
                type: "line",
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            }, {
                name: "成交量",
                type: "bar",
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.vols,
                itemStyle: {
                    normal: {
                        color: function (E) {
                            var D;
                            if (data.datas[E.dataIndex][1] > data.datas[E.dataIndex][0]) {
                                D = "#ef232a";
                            } else {
                                D = "#14b143";
                            }
                            return D;
                        }
                    }
                }
            }
        ]
    });
}

function splitData(D) {
    var C = [];
    var B = [];
    var E = [];
    for (var A = 0; A < D.length; A++) {
        B.push(D[A][0]);
        C.push(D[A].slice(1));
        E.push(D[A][5]);
    }
    return {datas: C, times: B, vols: E};
}

function fenduans() {
    var E = [];
    var D = 0;
    var A = 0;
    var C = 0;
    for (var B = 0; B < data.times.length; B++) {
        if (data.datas[B][5] !== 0 && A === 0) {
            D = B;
            C = data.datas[B][4];
            A = 1;
        }
        if (A === 1) {
            C += data.datas[B][4];
        }
        if (data.datas[B][5] !== 0 && A === 1) {
            E.push([
                {
                    xAxis: D,
                    yAxis: data.datas[D][1] > data.datas[D][0]
                        ? (data.datas[D][3]).toFixed(2)
                        : (data.datas[D][2]).toFixed(2),
                    value: C
                }, {
                    xAxis: B,
                    yAxis: data.datas[B][1] > data.datas[B][0]
                        ? (data.datas[B][3]).toFixed(2)
                        : (data.datas[B][2]).toFixed(2)
                }
            ]);
            D = B;
            C = data.datas[B][4];
            A = 2;
        }
        if (A === 2) {
            C += data.datas[B][4];
        }
        if (data.datas[B][5] !== 0 && A === 2) {
            E.push([
                {
                    xAxis: D,
                    yAxis: data.datas[D][1] > data.datas[D][0]
                        ? (data.datas[D][3]).toFixed(2)
                        : (data.datas[D][2]).toFixed(2),
                    value: (C / (B - D + 1)).toFixed(2) + " M"
                }, {
                    xAxis: B,
                    yAxis: data.datas[B][1] > data.datas[B][0]
                        ? (data.datas[B][3]).toFixed(2)
                        : (data.datas[B][2]).toFixed(2)
                }
            ]);
            D = B;
            C = data.datas[B][4];
        }
    }
    return E;
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data.times.length; i < len; i++) {
        if (i < dayCount) {
            result.push("-");
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += eval(data.datas[i - j][1]);
        }
        result.push((sum / dayCount).toFixed(2));
    }
    return result;
}
