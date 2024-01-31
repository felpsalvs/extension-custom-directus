<template>
	<div v-if="!loading">
		<p>Collection: {{ collection }}</p>

		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.id">
					<td>{{ item.name }}</td>
					<td>{{ item.email }}</td>
					<td><a :href="`/content/${collection}/${item.id}`">View Details</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		collection: {
			type: String,
			required: true,
		},
		items: Array,
		loading: Boolean,
		error: Array,
		search: {
			type: String,
			default: null,
		},
	}
};
</script>