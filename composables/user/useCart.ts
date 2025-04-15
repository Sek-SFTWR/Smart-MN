import { ref } from "vue";

const cart = ref([]);

export default function useCart() {
  const addToCart = (course) => {
    // Check if the course is already in the cart
    const exists = cart.value.some(
      (item) => item.course_id === course.course_id
    );
    if (!exists) {
      cart.value.push(course);
    }
  };

  const removeFromCart = (courseId) => {
    cart.value = cart.value.filter((course) => course.course_id !== courseId);
  };

  return {
    cart,
    addToCart,
    removeFromCart
  };
}
