const module = {
  state: {
    topbar: null,
    topbarInject: null,
    topbarCallback: null,

    panelTopHeight: '64px',
    panelComponent: null,
    modalComponent: null,

    currentTab: '',
    currentLanguage: '',
  },
  getters: {
    panelOpened: s => (s.panelComponent ? true : false),
    modalOpened: s => (s.modalComponent ? true : false),
  },
  mutations: {
    setTopbar: (s, { message, inject, cb }) => {
      s.topbar = message
      s.topbarInject = inject
      s.topbarCallback = cb
      s.panelTopHeight = '107px'
    },
    clearTopbar: s => {
      s.topbar = null
      s.topbarInject = null
      s.topbarCallback = null
      s.panelTopHeight = '64px'
    },
    closePanel: s => (s.panelComponent = null),
    openPanel: (s, panel) => (s.panelComponent = panel),
    closeModal: s => (s.modalComponent = null),
    openModal: (s, payload) => (s.modalComponent = payload),

    changeTab: (s, tabName) => (s.currentTab = tabName),
    change_language: (s, lang) => {
      //native.RegistrySetValue('_Launcher.Language', lang)
      NodeModules.set_data('config', { 'Language': lang })
      s.currentLanguage = lang
    },
  },
  actions: {

    get_language: async s => {
      //let lang = native.RegistryGetValue('_Launcher.Language')
      let lang = NodeModules.get_data('config').Language
      if (lang) s.commit('change_language', lang)
    },
  },
}

export default module