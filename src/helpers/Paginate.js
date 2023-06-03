export default class Paginate {
    _page;
    _minPage;
    _totalPage = 1;
    _totalData = 1;
    _currentTotal = 1;
    _dataTable = [];
    _dataTableShow = [];
    _method = "client";
    loading = false;
    refreshDataServer = () => {};

    constructor({ page = 1, minPage = 5, method = "client" } = {}) {
        this._page = page;
        this._minPage = minPage;
        this._method = method;
    }

    getDataTable = (data) => {
        try {
            this._dataTable = data;

            if (this._method == "client") {
                this.setTotalData(this._dataTable.length);
                this.setTotalPage(this._dataTable.length, this._minPage);
                this.paginateHandler(this._page);
            } else {
                this._dataTableShow = this._dataTable;
            }
        } catch (error) {
            console.log(error, "getDataTable");
        }
    };

    showDataTable = () => {
        try {
            if (this._minPage == this._totalData) {
                this._dataTableShow = this._dataTable;
            } else {
                this._dataTableShow = [...this._dataTable].splice(
                    (this._page - 1) * this._minPage,
                    this._minPage
                );
            }
        } catch (error) {
            console.log(error, "showDataTable");
        }
    };

    setTotalData = (total) => {
        this._totalData = total;
    };

    setTotalPage = (dataTotal, minPage) => {
        this._totalPage = Math.ceil(dataTotal / minPage);
    };

    refreshDataClient() {
        try {
            this.showDataTable();
        } catch (error) {
            console.log(error, "refreshDataClient");
        }
    }

    minPageHandler = (value) => {
        try {
            this._page = 1;
            if (this._method == "client") {
                this._minPage = value == "all" ? this._dataTable.length : value;

                this.setTotalPage(this._dataTable.length, this._minPage);
            } else {
                this._minPage = value == "all" ? this._totalData : value;

                this.setTotalPage(this._totalData, this._minPage);
            }

            this.paginateHandler(1);
        } catch (error) {
            console.log(error, "minPageHandler");
        }
    };

    paginateHandler = (page = 1) => {
        try {
            this._page = page;

            if (this._method == "client") {
                this._currentTotal =
                    page == this._totalPage &&
                    this._totalData % this._minPage != 0
                        ? (page - 1) * this._minPage +
                          (this._totalData % this._minPage)
                        : page * this._minPage;

                this.refreshDataClient();
            } else {
                this.refreshDataServer();
            }
        } catch (error) {
            console.log(error, "paginateHandler");
        }
    };
}
