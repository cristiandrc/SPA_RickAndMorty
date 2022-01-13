const Filter = () => {
  const view = `
      <form class="filter" action="" method="get">
      <select name=" " class="hide"><!-- para corregir un error de filtrar Status :) -->
          <option value="">None</option>
      </select> <!-- para corregir un error de filtrar Status :) -->

      <input name="name" type="text" placeholder="Name Search">

      <label for="">Status</label>
      <select name="status">
          <option value="">None</option>
          
          <option value="alive">Alive</option>
          
          <option value="dead">Dead</option>
          
          <option value="unknown">Unknown</option>
          
      </select>

      <label for="">Species</label>
      <select name="species">
          <option value="">None</option>
          
          <option value="human">Human</option>
          
          <option value="humanoid">Humanoid</option>
          
          <option value="animal">Animal</option>
          
          <option value="alien">Alien</option>
          
          <option value="mythological">Mythological</option>
          
          <option value="robot">Robot</option>
          
          <option value="disease">disease</option>
          
          <option value="Cronenberg">Cronenberg</option>
          
          <option value="poopybutthole">Poopybutthole</option>
          
          <option value="unknown">Unknown</option>
          
      </select>
      
      <label for="">Gender</label>
      <select name="gender">
          <option value="">None</option>
          
          <option value="Female">female</option>
          
          <option value="male">Male</option>
          
          <option value="genderless">Genderless</option>
          
          <option value="unknown">Unknown</option>
          
      </select>
      <button type="submit">Filter</button>
    </form>`;

  return view;
};

export default Filter;
