import { toRefs } from 'vue';
import { useItems, useCollection } from '@directus/extensions-sdk';
import LayoutComponent from './layout.vue';

export default {
	id: 'timio23-custom-layout',
	name: 'Custom Layout',
	icon: 'box',
	component: LayoutComponent,
	slots: {
		options: () => null,
		sidebar: () => null,
		actions: () => null,
	},
	setup(props) {
		const { collection, filter, search } = toRefs(props);
		const { info, primaryKeyField, fields: fieldsInCollection } = useCollection(collection);

		const { items, loading, error } = useItems(collection, {
			sort: primaryKeyField.field,
			limit: '-1',
			fields: '*',
			filter,
			search,
		});

		return {
			info,
			primaryKeyField,
			items,
			loading,
			filter,
			search,
			fieldsInCollection,
			error,
		};
	},
};