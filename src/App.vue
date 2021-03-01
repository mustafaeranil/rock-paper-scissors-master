<template>
  <div id="app">
    <div class="app-bg w-screen h-screen overflow-hidden">
      <div class="container mx-auto">
        <div class="flex flex-col items-center">
          <div
            class="border-4 mt-12 w-8/12 min-w-min flex rounded-3xl border-header-outline px-10 py-6"
          >
            <div class="flex-grow">
              <h1 class="text-5xl font-bold text-white overflow-hidden">
                <span class="w-0 block">ROCK PAPER SCISSORS</span>
              </h1>
            </div>
            <div
              class="bg-white rounded-lg flex flex-col items-center justify-center w-52"
            >
              <div class="text-center text-2xl text-score-text tracking-wider">
                SCORE
              </div>
              <div class="text-7xl text-dark-text font-bold">
                {{ score }}
              </div>
            </div>
          </div>
          <div v-if="currentStep === 1" class="mt-12">
            <div class="relative flex flex-wrap justify-center">
              <img
                src="/images/bg-triangle.svg"
                class="absolute m-auto left-0 top-0 bottom-0 right-0"
                alt=""
              />
              <div class="flex justify-center w-full">
                <div class="m-10">
                  <hand :choose="'paper'" @clicked="setChosen" />
                </div>
                <div class="m-10">
                  <hand :choose="'scissors'" @clicked="setChosen" />
                </div>
              </div>
              <hand :choose="'rock'" @clicked="setChosen" />
            </div>
          </div>
          <div
            v-if="currentStep === 2"
            class="min-w-min mt-20 flex justify-center items-center"
          >
            <div class="text-center flex flex-col items-center">
              <div class="text-white text-4xl tracking-wider">YOU PICKED</div>
              <div class="mt-20 relative ">
                <template v-if="winState === 1">
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner"
                  ></div>
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner animation-delay-1"
                  ></div>
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner animation-delay-2"
                  ></div>
                </template>
                <hand :choose="chosen" :size="2" />
              </div>
            </div>
            <div
              class="flex flex-col items-center justify-center"
              :class="houseChoice ? null : 'invisible'"
            >
              <div
                class="mt-20 mx-20 font-bold text-white text-7xl w-72 text-center"
              >
                {{ message }}
              </div>
              <button
                @click="playAgain()"
                class="hover:text-red-800 mt-8 shadow rounded-xl focus:outline-none bg-white text-xl px-20 py-4 tracking-wider text-dark-text"
              >
                PLAY AGAIN
              </button>
            </div>
            <div class="text-center flex flex-col items-center">
              <div class="text-white text-4xl tracking-wider">
                THE HOUSE PICKED
              </div>
              <div class="mt-20 relative">
                <template v-if="winState === -1">
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner"
                  ></div>
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner animation-delay-1"
                  ></div>
                  <div
                    class="rounded-full bg-white w-full h-full absolute left-0 top-0 animation-winner animation-delay-2"
                  ></div>
                </template>
                <hand :choose="houseChoice" :size="2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="fixed focus:outline-none bottom-10 right-10 rounded-xl border-4 border-header-outline text-white text-2xl px-10 py-2 tracking-widest"
      @click="setModal(true)"
    >
      RULES
    </button>
    <modal v-if="modalActive" @close="setModal(false)">
      <h1 class="text-dark-text text-4xl font-bold mb-8">RULES</h1>
      <img src="/images/image-rules.svg" alt="RULES" />
    </modal>
  </div>
</template>
<script>
import modal from './components/modal'
import hand from './components/hand'
export default {
  data() {
    return {
      modalActive: false,
      houseChoice: '',
      chosen: '',
      currentStep: 1,
      choices: ['rock', 'scissors', 'paper'],
      winState: 0,
      message: ''
    }
  },
  components: {
    modal,
    hand
  },
  computed: {
    score() {
      return this.$store.state.score
    }
  },
  methods: {
    setModal(value) {
      this.modalActive = value
    },
    setChosen(hand) {
      this.chosen = hand
      this.goStep(2)
    },
    goStep(step) {
      step === 2 ? setTimeout(() => this.houseRandomChoice(), 1500) : null
      this.currentStep = step
    },
    houseRandomChoice() {
      let randomChoice = this.choices[
        Math.floor(Math.random() * this.choices.length)
      ]
      this.houseChoice = randomChoice
      setTimeout(() => this.announceWinner(), 500)
    },
    announceWinner() {
      const state = this.isItWon()

      this.winState = state
      state === 1
        ? (this.$store.dispatch('increaseScore'), (this.message = 'YOU WIN'))
        : state === -1
        ? (this.message = 'YOU LOSE')
        : state === 0
        ? (this.message = 'DRAW')
        : null
    },
    isItWon() {
      const choice1 = this.chosen
      const choice2 = this.houseChoice
      console.log('player 1=' + choice1)
      console.log('player 2=' + choice2)
      if (choice1 === 'paper') {
        if (choice2 === 'rock') {
          return 1
        } else if (choice2 === 'scissors') {
          return -1
        }
      } else if (choice1 === 'scissors') {
        if (choice2 === 'rock') {
          return -1
        } else if (choice2 === 'paper') {
          return 1
        }
      } else {
        if (choice2 === 'scissors') {
          return 1
        } else if (choice2 === 'paper') {
          return -1
        }
      }
      if (choice1 === choice2) return 0
    },
    playAgain() {
      this.currentStep = 1
      this.chosen = ''
      this.winState = 0
      this.houseChoice = ''
      this.message = ''
    }
  }
}
</script>
<style lang="scss"></style>
