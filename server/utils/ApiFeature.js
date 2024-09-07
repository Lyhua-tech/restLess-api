export class ApiFeature {
    constructor(query, queryString){
        this.query = query,
        this.queryString = queryString
    }
    filtering(){
        const queryObj = {...this.queryString};
        const excludeField = ['sort', 'page', 'limit', 'fields'];

        excludeField.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);

        queryStr = queryStr.replace(/\\b(gte|gt|lte|lt)\\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    sorting(){
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort({_id: -1});
        }

        return this;
    }

    limitFields(){
        if(this.queryString.field) {
            const fields = this.queryString.field.split(',').join(" ");
            this.query = this.query.select(fields);
        }

        return this;
    }

    pagination(cursor, limit){
        if (cursor) {
            this.query = this.query.find({ _id: { $gt: cursor } }).limit(parseInt(limit));
        } else {
            this.query = this.query.limit(parseInt(limit));
        }

        return this;
    }
}