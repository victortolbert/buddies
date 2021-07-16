export const state = () => ({
  message: 'Hello Vuex',
  theBrothers: [],
  user: {
    lastname: '',
    firstname: ''
  }
})

export const mutations = {
  updateMessage(state, message) {
    state.message = message
  },
  updateUser(state, user) {
    Object.assign(state.user, user);
  },
  setCheckboxes(state, dataObj) {
    console.log(dataObj);
    state.checkboxes = dataObj.data;
    const firstElem = dataObj.data[Object.keys(dataObj.data)[0]];
    state.checked[firstElem.parent_id] = [firstElem.id];
    console.log(state.checked);
  },
  setTreeState(state, dataObj) {
    state.checked[dataObj.id] = dataObj.value;
    console.log(state.checked);
  },
  addSelectedTenant(state, tenant) {
    this.state.selectedTenants.push(tenant)
  },
  removeSelectedTenant(state, id) {
    this.state.selectedTenants = this.state.selectedTenants.filter(tenant => {
      return tenant.id != id
    })
  }
}

export const actions = {
  updateSelectedTenants(context, tenant) {
    if (tenant.checked) {
      // Tenant checked, so we want to add this tenant to our list of 'selectedTenants'
      context.commit('addSelectedTenant', { id: tenant.id, name: tenant.value })
    } else {
      // otherwise, remove the tenant from our list
      context.commit('removeSelectedTenant', tenant.id)
    }
  }
}
