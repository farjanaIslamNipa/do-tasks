<template>
  <div class="bg-brand py-2">
    <div class="container">
        <div class="d-flex align-items-center find-task-sub-nav">
            <div class="col-auto">
                <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                <div class="input-group">
                    <input id="autoSizingInputGroup" type="text" class="form-control search-input" placeholder="Search . . .">
                    <div class="input-group-text search-submit">
                        <button type="submit" class="search-submit-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
            <div class="px-xl-5 px-lg-4 px-3">
                <div class="btn-group">
                    <button id="dropdownMenuButton" class="btn text-white text-capitalize dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
            <div class="px-xl-5 px-lg-4 px-3">
                <div class="btn-group">
                    <button id="dropdownMenuButton" class="btn text-white text-capitalize dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Location
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
            <div class="px-xl-5 px-lg-4 px-3">
                <div class="btn-group">
                    <button id="dropdownMenuButton" class="btn text-white text-capitalize dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Price
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
            <div class="px-xl-5 px-lg-4 px-3">
                <div class="btn-group">
                    <button id="dropdownMenuButton" class="btn text-white text-capitalize dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
            <div class="px-xl-5 px-lg-4 px-3">
                <div class="btn-group">
                    <button id="dropdownMenuButton" class="btn text-white text-capitalize dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.search-input{
    background: none;
    border: 1px solid rgb(209, 208, 208);
    border-radius: 30px 0 0 30px;
    border-right: none;
    color: white;
}
.search-input::placeholder{
    color: rgb(214, 214, 214);
}
.search-submit{
    background: none;
    border: 1px solid rgb(209, 208, 208);
    border-radius: 0 30px 30px 0;
    border-left: none;
    color: white;
}
.search-submit-btn{
    background: none;
    border: none;
    padding: none;
    color: white;
}
.find-task-sub-nav{
    overflow-x: auto;
}
.find-task-sub-nav::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background: none !important;
}

.find-task-sub-nav::-webkit-scrollbar
{
	width: 10px;
    height: 8px;
	background: none !important;
}

.find-task-sub-nav::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #8DC63F;
}
</style>