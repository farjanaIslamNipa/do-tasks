<template>
    <div class="bg-purple-lighter">
        <FindTaskSubNav />
        <div class="container">
            <div class="row pt-4 position-relative">
                <div class="col-lg-4 mb-lg-0 mb-4 pe-lg-0 pe-2">
                    <div class="sticky-taskbar-section">
                        <div class="sidebar-width">
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                            <FindTaskSidebarCard />
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-0 ps-2 mb-5">
                    <FindTaskExpandDetails />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sticky-taskbar-section{
    height: 95vh;
    position: sticky;
    top: 80px;
    transition: all 0.3s ease;
    display: inline-block;
    overflow: hidden;
    width: 98%;
}
.sidebar-width{
    max-width: 405px;
}
.sticky-taskbar-section:hover{
    overflow-y: overlay;

}
.sticky-taskbar-section::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.sticky-taskbar-section::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

.sticky-taskbar-section::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #ece0f3;
}
@media only screen and (max-width:1399px){
.sidebar-width{
    max-width: 340px;
    margin: 0 auto;
}
}
@media only screen and (max-width:991px){
    .sticky-taskbar-section{
    height: 23vh;
}
.sidebar-width{
    max-width: 680px;
    margin: 0 auto;
}
}
</style>