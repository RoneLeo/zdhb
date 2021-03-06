// echart自适应
window.addEventListener("resize", function () {
  cityPie.resize();
  simpleBar.resize();
  airBar.resize();
  siteLine.resize();
  coporateBar.resize();
  twoPies.resize();
});

var cityPie = echarts.init(document.getElementById("city_mini_pie"));
var cityPieOption = {
  tooltip: {
    show: !0,
    formatter: "{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: '65%',
    y: 45,
    data: ["小时", "日累计", "综指"]
  },
  toolbox: {
    show: !0,
    feature: {
      mark: {
        show: !0
      },
      dataView: {
        show: !0,
        title: "Text View",
        lang: ["Text View", "Close", "Refresh"],
        readOnly: !1
      },
      restore: {
        show: !0,
        title: "Restore"
      },
      saveAsImage: {
        show: !0,
        title: "Save Image"
      }
    }
  },
  series: [{
    name: "1",
    type: "pie",
    clockWise: !1,
    radius: [60, 70],
    center : ['40%', '50%'],
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    lableLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: true
      }
    },
    data: [{
      value: 68,
      name: "小时",
      itemStyle: {
        normal: {color: '#26B99A'}
      }
    }, {
      value: 32,
      name: "invisible",
      tooltip: {
        show: 0
      },
      hoverAnimation:false,
      itemStyle: {
        normal: {color: '#E1F4F8',emphasis: {show: false}}
      }
    }]
  }, {
    name: "2",
    type: "pie",
    clockWise: !1,
    radius: [45, 60],
    center : ['40%', '50%'],
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    lableLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: true
      }
    },
    data: [{
      value: 29,
      name: "日累计",
      itemStyle: {
        normal: {color: '#C1C1C1'}
      }
    }, {
      value: 71,
      name: "invisible",
      tooltip: {
        show: 0
      },
      hoverAnimation:false,
      itemStyle: {
        normal: {color: '#E1F4F8',emphasis: {show: false}}
      }
    }]
  }, {
    name: "3",
    type: "pie",
    clockWise: !1,
    radius: [5, 45],
    center : ['40%', '50%'],
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    lableLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: true
      }
    },
    data: [{
      value: 10,
      name: "综指",
      itemStyle: {
        normal: {color: '#2A3F54'}
      }
    }, {
      value: 90,
      name: "invisible",
      tooltip: {
        show: 0
      },
      hoverAnimation:false,
      itemStyle: {
        normal: {color: '#E1F4F8',emphasis: {show: false}}
      }
    }]
  }]
};
cityPie.setOption(cityPieOption, true);


var simpleBar = echarts.init(document.getElementById("echart_simple_bar"));
var option = {
  tooltip: {
    show: !0,
    formatter: "{b} : {c}"
  },
  toolbox: {
    show : true,
    feature : {
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  xAxis: {
    type: 'category',
    data: ['VOCs', '餐饮', '企业', '车辆','工厂']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    center : ['80%', '50%'],
    data: [780, 1200, 2400, 560, 900],
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#26B99A'
      }
    }
  }]
};

simpleBar.setOption(option, true);


var airBar = echarts.init(document.getElementById("air_echart_bar"));

var option2 = {

  tooltip : {
    trigger: 'axis'
  },
  legend: {
    x: 'left',
    data:['蒸发量','降水量']
  },
  toolbox: {
    show : true,
    feature : {
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  xAxis : [
  {
    type : 'category',
    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  }
  ],
  yAxis : [
  {
    type : 'value'
  }
  ],
  series : [
  {
    name:'蒸发量',
    type:'bar',
    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    markPoint : {
      data : [
      {type : 'max', name: '最大值'},
      {type : 'min', name: '最小值'}
      ]
    },
    markLine : {
      data : [
      {type : 'average', name: '平均值'}
      ]
    },
    itemStyle: {
      normal: {
        color: '#26B99A'
      }
    }
  },
  {
    name:'降水量',
    type:'bar',
    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    markPoint : {
      data : [
      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
      ]
    },
    markLine : {
      data : [
      {type : 'average', name : '平均值'}
      ]
    },
    itemStyle: {
      normal: {
        color: '#2A3F54'
      }
    }
  }
  ]
};
airBar.setOption(option2, true);

var twoPies = echarts.init(document.getElementById("two_echart_pies"));
var option4 = {
  tooltip: {
    show: !0,
    formatter: "{b} : {c} ({d}%)"
  },
  toolbox: {
    x : 'right',
    y : '70%',
    show : true,
    feature : {
      dataView : {show: true, readOnly: false},
      magicType : {
        show: true,
        type: ['pie', 'funnel']
      },
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  series : [
  {
    name:'作业覆盖率',
    type:'pie',
    radius : [20, 40],
    center : ['25%', '40%'],
    roseType : 'area',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    lableLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    data:[
    {
      value:5, 
      name:'已完成',
      itemStyle: {
        normal: {
          color: '#26B99A'
        }
      }
    },
    {
      value:5, 
      name:'未完成',
      itemStyle: {
        normal: {
          color: '#ccc'
        }
      }
    }
    ]
  },
  {
    name:'出勤率',
    type:'pie',
    radius : [20, 40],
    center : ['75%', '40%'],
    roseType : 'area',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    lableLine: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    data:[
    {
      value:10, 
      name:'已完成',
      itemStyle: {
        normal: {
          color: '#26B99A'
        }
      }
    },
    {
      value:5, 
      name:'未完成',
      itemStyle: {
        normal: {
          color: '#ccc'
        }
      }
    }
    ]
  }
  ]
};
twoPies.setOption(option4, true);

var siteLine = echarts.init(document.getElementById("site_echarts_line"));
siteLine.setOption(option = {
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    textStyle: {
      fontSize: 10
    },
    x: 'left',
    data:['工地数量','超排次数']
  },
  toolbox: {
    show : true,
    feature : {
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  xAxis : [
  {
    type : 'category',
    boundaryGap : false,
    // axisLabel: {
    //   show: true,
    //   textStyle: {
    //     color: '#ccc',
    //     fontSize: 16
    //   }
    // },
    data : ['周一','周二','周三','周四','周五','周六','周日']
  }
  ],
  yAxis : [
  {
    type : 'value',
    splitNumber: 8
  }
  ],
  series : [
  {
    name:'工地数量',
    type:'line',
    smooth:true,
    itemStyle: {normal: {areaStyle: {type: '#26B99A'},
    color:'#26B99A'}},
    data:[10, 12, 11, 11, 13, 12, 10]
  },
  {
    name:'超排次数',
    type:'line',
    smooth:true,
    itemStyle: {normal: {areaStyle: {type: '#3E5164'},
      color:'#3E5164'}},
      data:[30, 10, 20, 31, 39, 30, 10]
    }

    ]
  }
  , true);


var coporateBar = echarts.init(document.getElementById("coporate_echarts_bar"));
coporateBar.setOption(option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
    show : true,
    feature : {
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
    legend: {
      x: 'left',
        data: ['企业数量', '超排次数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
        // boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: '企业数量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#2A3F54'
              }
            },
            data: [182, 234, 290, 104, 131, 630,563]
        },
        {
            name: '超排次数',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#26B99A'
              }
            },
            data: [193, 234, 310, 121, 131, 681,456]
        }
    
    ]
}
  , true);

// var $coporate_bar_width = $(".coporate_bar").width();
// var $coporate_bar_height = $(".coporate_bar").height();
// console.log($coporate_bar_width + " " + $coporate_bar_height);
// $(".coporate_bar>canvas").width($coporate_bar_width);
// $(".coporate_bar>canvas").height($coporate_bar_height);

// var canvasWidth = $(".coporate_bar>canvas").width();
// var canvasHeight = $(".coporate_bar>canvas").height();

// console.log(canvasWidth + ' ' + canvasHeight);

// var siteLine = document.getElementById("site_ChartJS_line");
// new Chart(siteLine, {
//   type: "line",
//   data: {
//     labels: ["1", "2", "3", "4", "5", "5", "7"],
//     datasets: [{
//       label: "工地数量",
//       backgroundColor: "rgba(38,185,154,0.9)",
//       borderColor: "rgba(38,185,154,0.3)",
//       pointBorderColor: "rgba(38, 185, 154, 0.7)",
//       pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointBorderWidth: 1,
//       data: [31, 74, 6, 39, 20, 85, 7]
//     }, {
//       label: "超排次数",
//       backgroundColor: "rgba(42,63,84,0.9)",
//       borderColor: "rgba(42,63,84,0.3)",
//       pointBorderColor: "rgba(3, 88, 106, 0.70)",
//       pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgba(151,187,205,1)",
//       pointBorderWidth: 1,
//       data: [82, 23, 66, 9, 99, 4, 2]
//     }]
//   }
// });

// var coporateBar = document.getElementById("coporate_ChartJS_bar");
// new Chart(coporateBar, {
//   type: "bar",
//   data: {
//     labels: ["1", "2", "3", "4", "5", "6", "7"],
//     datasets: [{
//       label: "企业数量",
//       backgroundColor: "#26B99A",
//       data: [51, 30, 40, 28, 92, 50, 45]
//     }, {
//       label: "超排次数",
//       backgroundColor: "#2A3F54",
//       data: [41, 56, 25, 48, 72, 34, 12]
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: !0
//         }
//       }]
//     },
//     layout: {
//       padding: {
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 50
//       }
//     }
//   }
// });



            // var carPie = echarts.init(document.getElementById("carMag_echart_pie"));

      // var option3 = {
      //   tooltip: {
      //     show: !0,
      //     formatter: "{c}<br/>{d}%"
      //   },
      //   toolbox: {
      //     show : true,
      //     feature : {
      //       dataView : {show: true, readOnly: false},
      //       restore : {show: true},
      //       saveAsImage : {show: true}
      //     }
      //   },
      //   legend: {
      //     x : 'center',
      //     y : '70%',
      //     // orient: "vertical",
      //     data:['rose1','rose2']
      //   },
      //   series : [
      //   {
      //     name:'半径模式',
      //     type:'pie',
      //     radius : [30, 50],
      //     center : ['50%', '40%'],
      //     roseType : 'radius',
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //       emphasis: {
      //         show: false
      //       }
      //     },
      //     lableLine: {
      //       normal: {
      //         show: false
      //       },
      //       emphasis: {
      //         show: true
      //       }
      //     },
      //     data:[
      //     {
      //       value:10, 
      //       name:'rose1',
      //       itemStyle: {
      //         normal: {
      //           color: '#26B99A'
      //         }
      //       }},
      //       {
      //         value:7, name:'rose2',itemStyle: {
      //           normal: {
      //             color: '#2A3F54'
      //           }
      //         }
      //       }
      //     ]
      //   },
      //   ]
      // };

      // carPie.setOption(option3, true);
