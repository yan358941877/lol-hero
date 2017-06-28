/* 当action的类别是加载数据时或加载数据完毕，修改status的isLoaing的值 */
import actionCreators from '../actions/status-action-creators'

const loadingActions = []

export default store => next => (action) => {
  if (action.payload instanceof Promise) {
    if (action.type === 'LOAD_HERO') {
      loadingActions.splice(0, loadingActions.length)
    }
    loadingActions.push(action.type)
    // 说明现在正在加载数据
    if (!store.getState().getIn(['status', 'isLoading'])) {
      store.dispatch(actionCreators.loading())
    }
  } else {
    // redux-promise会处理Promise数据，然后将Promise的结果重新打包成action(type的值不变)，然后将该action传给dispatch，而不是直接将action传递给reducer
    const index = loadingActions.indexOf(action.type)
    if (index !== -1) {
      loadingActions.splice(index, 1)
      if (loadingActions.length === 0 && store.getState().getIn(['status', 'isLoading'])) {
        store.dispatch(actionCreators.loadComplete())
      }
    }
  }
  next(action)
}
