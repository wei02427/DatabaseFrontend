import React, { Component } from 'react';
import '../../css/dateSelect.css';

class DateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: null,
      monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      dayList: null,
      selectYear: props.year, //选中的年份
      selectMonth: props.month, //选中的月份
      selectDay: props.day, //选中的日期
    };
    this.dataInit = this.dataInit.bind(this);
  }
  componentDidMount() {
    this.dataInit();
  }
  dataInit() {
    let date = new Date();
    let current_year = date.getFullYear();
    let yearList = [];
    let dayList = [];
    new Promise((resolve, reject) => {
      for (let i = 0; i < 100; i++) {
        let y = current_year - i;
        yearList.push(y);
      }
      for (let k = 1; k < 32; k++) {
        dayList.push(k);
      }
      resolve();
    }).then((...e) => {
      this.setState({
        yearList,
        dayList,
      });
    });
  }
  yearChange(e) {
    let year = e.target.value;
    if (!year) return;
    this.setState({
      selectYear: year,
      selectMonth: 1,
      selectDay: 1,

    });

    if (this.props.onChange) {
      this.props.onChange(new Date(`${year}/1/1 00:00:00`));
      
    }
  }

  monthChange(e) {
    let month = e.target.value;
    if (!month) return;
    month = parseInt(month, 10);
    let d = new Date(this.state.selectYear, month, 0);
    let dayNum = d.getDate();
    let dayList = [];
    for (let k = 0; k < dayNum; k++) {
      dayList.push(k + 1);
    }
    this.setState({
      selectMonth: month,
      selectDay: 1,

      dayList,
    });
    if (this.props.onChange) {
      this.props.onChange(
        new Date(`${this.state.selectYear}/${month}/1 00:00:00`)
      );
    }
  }

  dayChange(e) {
    let day = e.target.value;
    if (!day) return;
    this.setState({
      selectDay: day,
    });
    if (this.props.onChange) {
      this.props.onChange(
        new Date(
          `${this.state.selectYear}/${this.state.selectMonth}/${day} 00:00:00`
        )
      );
    }
  }
  render() {
    return (
      <div class="select-box">
        <span class="item">
          <select
            onChange={this.yearChange.bind(this)}
            className="select-main"
            value={this.state.selectYear}
          >
            <option className="li-item">- 年 -</option>
            {this.state.yearList
              ? this.state.yearList.map((item, index) => (
                  <option value={item} key={index} className="li-item">
                    {item}年
                  </option>
                ))
              : ''}
          </select>
        </span>
        <span>
          <select
            id= 'select-month'
            onChange={this.monthChange.bind(this)}
            className="select-main"
            value={this.state.selectMonth}
          >
            <option className="li-item">- 月 -</option>
            {this.state.monthList
              ? this.state.monthList.map((item, index) => (
                  <option value={item} key={index} className="li-item">
                    {item}月
                  </option>
                ))
              : ''}
          </select>
        </span>
        <span class="item">
          <select
            id= 'select-day'
            onChange={this.dayChange.bind(this)}
            className="select-main"
            value={this.state.selectDay}
          >
            <option className="li-item">- 日 -</option>

            {this.state.dayList
              ? this.state.dayList.map((item, index) => (
                  <option value={item} key={index} className="li-item">
                    {item}日
                  </option>
                ))
              : ''}
          </select>
        </span>
      </div>
    );
  }
}
export default DateSelect;