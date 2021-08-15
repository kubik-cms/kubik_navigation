# KubikMetatgable

Gem adding basic metatags configuration to Kubik projects.


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'kubik_previewable'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install kubik_previewable

## Usage

### Basic setup
In your metatagable model add:

```
include ::Kubik::KubikMetatagable
kubik_metatagable
```

The basic functionality can be extended with default values for title and descriptions by passing additional settings to `kubik_metatagable`.

```
kubik_metatagable(
  defaults: true,
  title: ->(e) { e.dummy_title },
  description: ->(e) { e.dummy_description }
)

```


### ActiveAdmin setup
Your ActiveAdmin requires addtional allowed attributes on model setup:

```
permit_params do
  params = %i[
    your_regular_params
  ]
  ::Kubik::PermitAdditionalAdminParams.push_to_params(Example, params)
  params
end
```

Then you should add additional fileds to form setup:

```
  form do |f|
    tabs do
      tab "Content" do
        inputs do
          input :dummy_title
          input :dummy_description
        end
      end
      tab "SEO" do
        render "admin/form/meta_tag_seo_helper", f: f
      end
      tab "Social Media" do
        render "admin/form/meta_tag_social_helper", f: f
      end
    end
    f.actions
  end
```

And you can add similar setup to show action:


```
  show do |example|
    tabs do
      tab "Content" do
        attributes_table do
          row :dummy_title
          row :dummy_description
        end
      end
      tab "SEO" do
        render "admin/show/meta_tag_seo_helper", object: example
      end
      tab "Social Media" do
        render "admin/show/meta_tag_social_helper", object: example
      end
    end
  end
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/primate-inc/kubik_previewable. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/primate-inc/kubik_previewable/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the KubikPreviewable project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/primate-inc/kubik_previewable/blob/master/CODE_OF_CONDUCT.md).
