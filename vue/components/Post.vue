<script>
import { useFetchPost } from '~/composables/useFetchPost'

export default {
  setup() {
    //  clear source of data/methods
    const {
      loading: loadingPost, //  can rename
      error,
      fetchPost,
      post,
    } = useFetchPost()

    return { loadingPost, error, fetchPost, post }
  },
}
</script>
