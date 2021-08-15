<template>
  <div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="/">フットテック</a>


      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/board/3-1">3-1(回避）</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/board/4-0">4-0（回避）</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/board/ki">敵陣KI</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/board/ck">CK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/board/pp">PP</a>
        </li>
      </ul>

    </nav> -->
    <b-navbar toggleable="lg" type="light" variant="light" class="sticky-top">
      <b-navbar-brand href="https://futsal.tech/">フットテック</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/board/pp">PP</b-nav-item>
          <b-nav-item href="/board/ck">CK</b-nav-item>
          <b-nav-item href="/board/ki">敵陣KI</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="定位置攻撃（自陣）" right>
            <b-dropdown-item href="/board/4-0">4-0</b-dropdown-item>
            <b-dropdown-item href="/board/3-1">3-1</b-dropdown-item>
            <b-dropdown-item href="/board/2-1-1">2-1-1(L)</b-dropdown-item>
            <b-dropdown-item href="/board/2-2">2-2</b-dropdown-item>
            <b-dropdown-item href="/board/1-3">1-3</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

