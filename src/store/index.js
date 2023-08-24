import {useCounterStore} from './modules/counter.js'

const useStore = () => ({
    useCounterStore:useCounterStore()
})

export default useStore