const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortTable: (fieldName, sort) => {
        const sortType = fieldName === sort.column ? sort.type : 'default';

        const icons = {
            default: 'bi bi-filter',
            asc: 'bi bi-sort-up',
            desc: 'bi bi-sort-down',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(`?_sort&column=${fieldName}&type=${type}`);

        const output = `<a href="${href}" class="btn text-primary p-0 fs-4">
                            <i class="${icon}"></i>
                        </a>`;

        return new Handlebars.SafeString(output);
    },
};
