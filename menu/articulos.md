---
layout: page
title: 
---
<ul class="posts">
  {% for post in site.posts %}

    {% unless post.next %}
      <h3>Artículos del {{ post.date | date: '%Y' }}</h3>
      <br/>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li itemscope>
      <a class="style-link" href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
      <p class="post-date"><span>
      Escrito por 
      {% if post.author %}
          <b>{{ post.author }}</b> -
        {% else %}
          <b>{{ site.author }}</b> -
        {% endif %}
      {{ post.date | date: "%-d" }} de
      {% assign m = post.date | date: "%-m" %}
      {% case m %}
        {% when '1' %}Enero
        {% when '2' %}Febrero
        {% when '3' %}Marzo
        {% when '4' %}Abril
        {% when '5' %}Mayo
        {% when '6' %}Junio
        {% when '7' %}Julio
        {% when '8' %}Agosto
        {% when '9' %}Septiembre
        {% when '10' %}Octubre
        {% when '11' %}Noviembre
        {% when '12' %}Diciembre
      {% endcase %} 
      del
      {{ post.date | date: "%Y" }}
      </span>
      </p>
    </li>
  {% endfor %}
</ul>
