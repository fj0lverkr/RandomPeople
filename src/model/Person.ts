class Person {
  public readonly UUID: string = crypto.randomUUID();
  public readonly gender: string;
  public readonly name: PersonName;
  public readonly location: PersonLocation;
  public readonly email: string;
  public readonly login: PersonLogin;
  public readonly dob: PersonDate;
  public readonly registered: PersonDate;
  public readonly phone: string;
  public readonly cell: string;
  public readonly id: PersonId;
  public readonly picture: PersonPicture;
  public readonly nat: string;
  public generatedBySeed: string = "";
  constructor(data: any) {
    let dn = data.name;
    let dl = data.location;
    let dls = dl.street;
    let dlc = dl.coordinates;
    let dlt = dl.timezone;
    let dlg = data.login;
    let dd = data.dob;
    let dr = data.registered;
    let di = data.id;
    let dp = data.picture;
    let personName: PersonName = new PersonName(dn.title, dn.first, dn.last);
    let personLocation = new PersonLocation(
      dls.number,
      dls.name,
      dl.city,
      dl.state,
      dl.country,
      dl.postcode,
      dlc.latitude,
      dlc.longitude,
      dlt.offset,
      dlt.description
    );
    let personLogin: PersonLogin = new PersonLogin(
      dlg.uuid,
      dlg.username,
      dlg.password,
      dlg.salt,
      dlg.md5,
      dlg.sha1,
      dlg.sha256
    );
    let personDob: PersonDate = new PersonDate(dd.date, dd.age);
    let personRegistered: PersonDate = new PersonDate(dr.date, dr.age);
    let personId: PersonId = new PersonId(di.name, di.value);
    let personPicture: PersonPicture = new PersonPicture(
      dp.large,
      dp.medium,
      dp.thumbnail
    );
    this.gender = data.gender;
    this.name = personName;
    this.location = personLocation;
    this.email = data.email;
    this.login = personLogin;
    this.dob = personDob;
    this.registered = personRegistered;
    this.phone = data.phone;
    this.cell = data.cell;
    this.id = personId;
    this.picture = personPicture;
    this.nat = data.nat;
  }
}

class PersonName {
  public readonly title: string;
  public readonly first: string;
  public readonly last: string;
  constructor(title: string, first: string, last: string) {
    this.title = title;
    this.first = first;
    this.last = last;
  }
}
class PersonLocation {
  public readonly street: PersonStreet;
  public readonly city: string;
  public readonly state: string;
  public readonly country: string;
  public readonly postcode: string;
  public readonly coordinates: PersonCoordinates;
  public readonly timezone: PersonTimeZone;
  constructor(
    streetnumber: number,
    name: string,
    city: string,
    state: string,
    country: string,
    postcode: string,
    latitude: string,
    longitude: string,
    offset: string,
    description: string
  ) {
    this.street = new PersonStreet(streetnumber, name);
    this.city = city;
    this.state = state;
    this.country = country;
    this.postcode = postcode;
    this.coordinates = new PersonCoordinates(latitude, longitude);
    this.timezone = new PersonTimeZone(offset, description);
  }
}

class PersonStreet {
  public readonly streetnumber: number;
  public readonly name: string;
  constructor(streetnumber: number, name: string) {
    this.streetnumber = streetnumber;
    this.name = name;
  }
}

class PersonCoordinates {
  public readonly latitude: string;
  public readonly longitude: string;
  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

class PersonTimeZone {
  public readonly offset: string;
  public readonly description: string;
  constructor(offset: string, description: string) {
    this.offset = offset;
    this.description = description;
  }
}

class PersonLogin {
  public readonly uuid: string;
  public readonly username: string;
  public readonly password: string;
  public readonly salt: string;
  public readonly md5: string;
  public readonly sha1: string;
  public readonly sha256: string;

  constructor(
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  ) {
    this.uuid = uuid;
    this.username = username;
    this.password = password;
    this.salt = salt;
    this.md5 = md5;
    this.sha1 = sha1;
    this.sha256 = sha256;
  }
}

class PersonDate {
  public readonly date: string;
  public readonly age: number;
  constructor(date: string, age: number) {
    this.date = date;
    this.age = age;
  }
}

class PersonId {
  public readonly name: string;
  public readonly value: string;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

class PersonPicture {
  public readonly large: string;
  public readonly medium: string;
  public readonly thumbnail: string;
  constructor(large: string, medium: string, thumbnail: string) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
  }
}

export default Person;
