
const {loadQuestions} = require('./util/lodasSamples')
const RUT = require('rut.js')

const initialStateAppStatus = {
  state: 'unchange'
}

module.exports.appStatus = function (state = initialStateAppStatus, action) {
  switch (action.type) {
    case 'APP_STEP_DISCARD': {
      return {
        ...state,
        ...initialStateAppStatus
      }
    }
    case 'APP_STEP_WAITING': {
      return {
        ...state,
        state: 'waiting'
      }
    }
    default: return state
  }
}

const initialStateRegistre = {
  state: 'no_load',
  responses: [],
  showReport: {
    state: 'no_load',
    registre_id: null
  }
}
module.exports.registre = function (state = initialStateRegistre, action) {
  switch (action.type) {
    case 'download_data_loading': {
      return {
        ...state,
        state: 'downloading_data'
      }
    }
    case 'download_data_loaded': {
      return {
        ...state,
        state: ''
      }
    }
    case 'pulling_registre': {
      return {
        ...state,
        showReport: {
          ...state.showReport,
          state: 'pulling'
        }
      }
    }
    case 'pulled_registre': {
      return {
        ...state,
        showReport: {
          ...state.showReport,
          state: 'pulled',
          registre: action.registre
        }
      }
    }
    case 'pulling_registers': {
      return {
        ...state,
        state: 'pulling'
      }
    }
    case 'end_pulling_registers': {
      return {
        ...state,
        state: 'pulled',
        responses: action.responses
      }
    }
    default: return state
  }
}

const initialStateQuest = {
  currentQuestion: 0,
  questions: loadQuestions(),
  responses: [],
  finishQuestionary: false
}

module.exports.quest = function (state = initialStateQuest, action) {
  switch (action.type) {
    case 'reset_all': {
      return {
        ...initialStateQuest,
        questions: loadQuestions()
      }
    }
    case 'save_response_saving': {
      return {
        ...state,
        saving: true,
        saved: false
      }
    }
    case 'save_response_saved': {
      return {
        ...state,
        saving: false,
        saved: true
      }
    }
    case 'response_question': {
      if (state.currentQuestion + 1 >= state.questions.length) {
        return {
          ...state,
          finishQuestionary: true,
          currentQuestion: undefined,
          responses: [
            ...state.responses,
            {
              question: state.questions[state.currentQuestion],
              response: action.response
            }
          ]
        }
      } else {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          responses: [
            ...state.responses,
            {
              question: state.questions[state.currentQuestion],
              response: action.response
            }
          ]
        }
      }
    }
    default: return state
  }
}

const initialStateSession = {
  id: undefined,
  id_format: undefined,
  tmp_rut: undefined,
  tmp_rut_valid: false,
  // tmp_name: undefined
}

module.exports.session = function (state = initialStateSession, action) {
  switch (action.type) {
    case 'reset_all': {
      return {
        ...initialStateSession
      }
    }
    case 'form_memory_update': {
      if (action.form === 'credentials' && action.name === 'rut') {
        return {
          ...state,
          tmp_rut_valid: RUT.validate(RUT.clean(action.value))
        }
      }
      return state
    }
    case 'sessin_login': {
      return {
        ...state,
        id: RUT.clean(action.rut),
        id_format: RUT.format(RUT.clean(action.rut))
      }
    }
    default: return state
  }
}

const initialStateFormMemory = {
  fields: {}
}
module.exports.forms_memory = function (state = initialStateFormMemory, action) {
  switch (action.type) {
    case 'form_memory_update': {
      const {name, value, form} = action

      return {
        ...state,
        fields: {
          ...state.fields,
          [`${form}_${name}`]: value,
        }
      }
    }
    default: return state
  }
}
