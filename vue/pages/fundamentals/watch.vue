<template>
  <div id="app">
    <div id="heroes">
      <h1>Heroes</h1>

      <div class="sorting">
        <label for="filtername">Find your hero:</label>
        <input id="filtername" v-model="findName" type="text" />
      </div>

      <ul>
        <li v-for="name in filteredNames" :key="name">
          {{ name }}
        </li>
      </ul>
    </div>

    <select v-model="selected">
      <option
        v-for="option in options"
        :key="option.text"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>

    <svg viewBox="0 0 400 400">
      <!--xaxis -->
      <g targetVal="targetVal" class="xaxis">
        <line x1="0" y1="1" x2="350" y2="1" />
        <g v-for="(select, index) in targetVal" :key="`y-${index}`">
          <line y1="0" y2="7" v-bind="{ x1: index * 10, x2: index * 10 }" />
          <text v-if="index % 5 === 0" v-bind="{ x: index * 10, y: 20 }">
            {{ index }}
          </text>
        </g>
      </g>

      <!--yaxis -->
      <g class="yaxis">
        <line x1="0" y1="1" :x2="getMax" y2="1" />
        <g v-for="n in getMaxRange" :key="`y-${n}`">
          <line y1="0" y2="7" v-bind="{ x1: n * 10, x2: n * 10 }" />
          <text v-if="n % 5 === 0" v-bind="{ x: getMax - n * 10 - 5, y: 20 }">
            {{ n }}
          </text>
        </g>
      </g>

      <!-- bars -->
      <g
        v-for="(select, index) in targetVal"
        :key="`bars-${index}`"
        class="bars"
      >
        <rect
          v-bind="{ x: index * 10 + 20, y: getMax - select * 10 }"
          width="10"
          :height="select * 10"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
  data() {
    return {
      counter: 0,
      findName: '',
      names: [
        'Evan You',
        'John Lindquist',
        'Jen Looper',
        'Miriam Suzanne',
        'Chris Coyier',
        'Geoff Graham',
        'Divya Sasidharan',
        'Lea Verou',
        'Rachel Andrew',
        'Vitaly Friedman',
        'Ryan Florence',
        'Dan Abramov',
        'Jen Simmons',
        'Robin Rendle',
        'Nicole Sullivan',
      ],
      selected: [
        25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36,
        15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15,
      ],
      targetVal: [
        25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36,
        15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15,
      ],
      options: [
        {
          text: 'First Dataset',
          value: [
            25, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25,
            36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10,
            25, 15,
          ],
        },
        {
          text: 'Second Dataset',
          value: [
            13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14,
            35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15, 25,
            37, 15,
          ],
        },
        {
          text: 'Third Dataset',
          value: [
            35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35,
            17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15, 25, 37, 15, 13, 25, 30,
            11, 17,
          ],
        },
      ],
    }
  },
  computed: {
    getMax() {
      return Math.max.apply(Math, this.selected) * 10
    },
    getMaxRange() {
      const maxi = Math.max.apply(Math, this.selected)
      return _.range(maxi)
    },
    filteredNames() {
      const filter = new RegExp(this.findName, 'i')
      return this.names.filter((el) => el.match(filter))
    },
  },
  watch: {
    counter() {
      // console.log('The counter has changed!')
    },
    selected(newValue, oldValue) {
      // Create a dummy object that will get updated by GSAP
      const tweenedData = {}

      // Update function that is invoked on each tween step
      // we use this to push the data
      const update = function () {
        const obj = Object.values(tweenedData)
        obj.pop()
        this.targetVal = obj
      }

      // Create an object to hold the source data to be tweened and the
      // function pointer for update events
      const tweenSourceData = { onUpdate: update, onUpdateScope: this }

      for (let i = 0; i < oldValue.length; i++) {
        // Turn the current index into a string
        const key = i.toString()
        tweenedData[key] = oldValue[i]
        tweenSourceData[key] = newValue[i]
      }

      // Tween over the our target dummy object, but only for the specific key
      TweenMax.to(tweenedData, 1, tweenSourceData)
    },
    checked() {
      const period = this.timeVal.slice(-2)
      const hr = this.timeVal.slice(0, this.timeVal.indexOf(':'))

      const dayhr = 12
      const rpos = 115
      const rneg = -118

      // eslint-disable-next-line eqeqeq
      if ((period === 'AM' && hr != 12) || (period === 'PM' && hr == 12)) {
        this.spin(`${rneg - (rneg / dayhr) * hr}`)
        this.animTime(1 - hr / dayhr, period)
      } else {
        this.spin(`${(rpos / dayhr) * hr}`)
        this.animTime(hr / dayhr, period)
      }
    },
  },
}
</script>

<style>
body {
  font-family: 'Mada', sans-serif;
  background: #222;
  background: #833ab4;
  background: linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #2c0938;
  font-family: 'Signika', sans-serif;
}

#app {
  text-align: center;
  max-width: 400px;
  margin: 30px auto;
  display: table;
}

span {
  color: white;
}

svg {
  width: 400px;
}
svg text {
  fill: grey;
  font-family: 'Mada', sans-serif;
}

line {
  stroke: #555;
  stroke-width: 2px;
}

select {
  font-family: 'Mada', sans-serif;
  background: #444;
  color: #ccc;
  border: 0;
  width: 200px;
  margin: 0 0 25px;
  outline: 0;
  cursor: pointer;
  height: 35px;
}
select option {
  font-family: 'Mada', sans-serif;
}

#heroes {
  width: 270px;
  background: white;
  padding: 20px;
  margin: 30px;
  border-radius: 4px;
  opacity: 0.95;
}

.sorting {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.sorting input {
  width: 50%;
  margin-left: 10px;
}

.xaxis {
  transform: translate(20px, 370px);
}

.yaxis {
  transform: translate(20px, 0px) rotate(90deg);
}

.bars:nth-child(1) rect {
  fill: #666666;
}

.bars:nth-child(2) rect {
  fill: #6a5e6e;
}

.bars:nth-child(3) rect {
  fill: #725775;
}

.bars:nth-child(4) rect {
  fill: #7d4f7a;
}

.bars:nth-child(5) rect {
  fill: #854777;
}

.bars:nth-child(6) rect {
  fill: #8c4070;
}

.bars:nth-child(7) rect {
  fill: #943863;
}

.bars:nth-child(8) rect {
  fill: #9c3052;
}

.bars:nth-child(9) rect {
  fill: #a3293c;
}

.bars:nth-child(10) rect {
  fill: #ab2121;
}

.bars:nth-child(11) rect {
  fill: #b3311a;
}

.bars:nth-child(12) rect {
  fill: #ba4612;
}

.bars:nth-child(13) rect {
  fill: #c2600a;
}

.bars:nth-child(14) rect {
  fill: #c97f03;
}

.bars:nth-child(15) rect {
  fill: #cc9f00;
}

.bars:nth-child(16) rect {
  fill: #ccbf00;
}

.bars:nth-child(17) rect {
  fill: #b9cc00;
}

.bars:nth-child(18) rect {
  fill: #99cc00;
}

.bars:nth-child(19) rect {
  fill: #79cc00;
}

.bars:nth-child(20) rect {
  fill: #59cc00;
}

.bars:nth-child(21) rect {
  fill: #39cc00;
}

.bars:nth-child(22) rect {
  fill: #1acc00;
}

.bars:nth-child(23) rect {
  fill: #00cc06;
}

.bars:nth-child(24) rect {
  fill: #00cc26;
}

.bars:nth-child(25) rect {
  fill: #00cc46;
}

.bars:nth-child(26) rect {
  fill: #00cc66;
}

.bars:nth-child(27) rect {
  fill: #00cc86;
}

.bars:nth-child(28) rect {
  fill: #00cca6;
}

.bars:nth-child(29) rect {
  fill: #00ccc6;
}

.bars:nth-child(30) rect {
  fill: #00b3cc;
}

.bars:nth-child(31) rect {
  fill: #0093cc;
}

.bars:nth-child(32) rect {
  fill: #0073cc;
}

.bars:nth-child(33) rect {
  fill: #0053cc;
}

.bars:nth-child(34) rect {
  fill: #0033cc;
}

.bars:nth-child(35) rect {
  fill: #0013cc;
}

.bars:nth-child(36) rect {
  fill: #0d00cc;
}

.bars:nth-child(37) rect {
  fill: #2d00cc;
}

.bars:nth-child(38) rect {
  fill: #4d00cc;
}

.bars:nth-child(39) rect {
  fill: #6c00cc;
}

.bars:nth-child(40) rect {
  fill: #8c00cc;
}
</style>
