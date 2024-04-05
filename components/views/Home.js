import html from "html-literal";

export default state => html`
  <section id="home">
    <h2>Cultural Archiver</h2>
    <div id="homeinfo">
      <h3>Why cultural preservation?</h3>
      <p>
        Cultural preservation is vital for several reasons. Firstly, it helps to
        maintain a sense of identity and belonging among communities. By
        preserving cultural practices, traditions, languages, and heritage
        sites, people can connect with their roots and understand their place in
        the world. This fosters a strong sense of pride and unity within the
        community.
      </p>
      <p>
        Secondly, cultural preservation contributes to the diversity and
        richness of human civilization. Each culture brings unique perspectives,
        knowledge, and artistic expressions that enrich the global cultural
        tapestry. Protecting these diverse cultural assets ensures that future
        generations can learn from them and continue to innovate based on this
        rich heritage.
      </p>
      <p>
        Additionally, cultural preservation promotes understanding and respect
        among different groups. When people appreciate and respect each other's
        cultures, it fosters peaceful coexistence and reduces conflicts based on
        cultural differences. This is particularly important in today's
        interconnected world, where people from diverse backgrounds interact on
        a daily basis.
      </p>
      <p>
        Furthermore, cultural preservation has economic benefits. Cultural
        heritage sites, traditional crafts, and cultural events can attract
        tourists, generate revenue, and create employment opportunities. This
        can contribute to the economic development of communities and regions
        while also preserving their unique cultural identity.
      </p>
      <p>
        In summary, cultural preservation is important for maintaining identity,
        enriching human civilization, promoting understanding and respect, and
        supporting economic development. It plays a crucial role in shaping a
        more inclusive, diverse, and harmonious world for present and future
        generations.
      </p>
    </div>
  </section>
  <h3 align="center">
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
