# KubikNavigation

Gem adding basic metatags configuration to Kubik projects.


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'kubik_navigation'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install kubik_navigation

## Usage

To access one of your navigation roots, using a Kubik::NavigationFacade to safely interface with the ancestry tree.

```
@nav = Kubik::NavigationFacade.new('Main navigation')
@nav.children
  > [<Kubik::NavigationItem::i>...]

@nav = Kubik::NavigationFacade.new('Missing navigation')
  > # logs "WARNING - Kubik Navigation: Tried to access navigation 'Missing navigation' but it does not exist"
@nav.children
  > []
```

For you primary navigations you can add a `before_action` to your parent controller class or ApplicationController:

```
class KubikController < ApplicationController
  before_action :fetch_main_navigation

  def fetch_main_navigation
     @main_navigation = NavigationFacade.new('Main navigation')
  end
end

```


### ActiveAdmin setup

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/primate-inc/kubik_previewable. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/primate-inc/kubik_previewable/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the KubikPreviewable project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/primate-inc/kubik_previewable/blob/master/CODE_OF_CONDUCT.md).
