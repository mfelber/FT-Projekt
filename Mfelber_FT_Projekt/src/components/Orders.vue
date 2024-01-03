<template>
    <div>
        <h3 v-if="orderItems.length === 0">You dont have any orders</h3>

        <table v-if="orderItems.length > 0" class="order-table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Game Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, orderIndex) in orderItems" :key="orderIndex">
                    <td>{{ order.OrderID }}</td>
                    <td>
                        <div v-for="(item, itemIndex) in order.items" :key="itemIndex">
                            {{ item.name }}
                        </div>
                    </td>
                    <td>
                        <div v-for="(item, itemIndex) in order.items" :key="itemIndex">
                            {{ item.price }}
                        </div>
                    </td>
                    <td>
                        <button @click="cart.clearOrder(orderIndex)">Cancel order</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
  
  
<script>
import { useGamesStore } from '../stores/CartStores';

export default {
    data() {
        return {
            cart: useGamesStore(),
        };
    },
    computed: {
        orderItems() {
            return useGamesStore().getOrder;
        },
    },
};
</script>

<style>
.order-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.order-table th,
.order-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.order-table th {
    background-color: #f2f2f2;
}
</style>



  

  