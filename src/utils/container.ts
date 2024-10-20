/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Container for Dependency Injection
 * This container is a singleton, which is why it has private constructor
 *
 * register(name, definition, dependencies): register/add an entity to the container
 * get(name): get the registered entity
 */
class Container {
  private static INSTANCE: Container | null = null;

  private services: Map<string, any>;
  private singletons: Map<string, any>;

  private constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  static getInstance(): Container {
    if (!this.INSTANCE) {
      this.INSTANCE = new Container();
    }

    return this.INSTANCE;
  }

  register(name: string, definition: any, dependencies: string[]) {
    this.services.set(name, {
      definition: definition,
      dependencies: dependencies,
    });
  }

  singleton(name: string, definition: any, dependencies: string[]) {
    this.services.set(name, {
      definition: definition,
      dependencies: dependencies,
      singleton: true,
    });
  }

  get(name: string) {
    const c = this.services.get(name);

    if (!c) {
      return;
    }

    if (this._isClass(c.definition)) {
      if (c.singleton) {
        const singletonInstance = this.singletons.get(name);

        if (singletonInstance) {
          return singletonInstance;
        } else {
          const newSingletonInstance = this._createInstance(c);
          this.singletons.set(name, newSingletonInstance);

          return newSingletonInstance;
        }
      }

      return this._createInstance(c);
    } else {
      return c.definition;
    }
  }

  // recursive function to resolve the dependency tree for an entity
  private _getResolvedDependencies(service: any) {
    let classDependencies = [];
    if (service.dependencies) {
      classDependencies = service.dependencies.map((dep: any) => {
        return this.get(dep);
      });
    }
    return classDependencies;
  }

  // instantiate an entity with all dependencies resolved
  private _createInstance(service: any) {
    return new service.definition(...this._getResolvedDependencies(service));
  }

  private _isClass(definition: any) {
    return typeof definition === "function";
  }
}

export default Container;
